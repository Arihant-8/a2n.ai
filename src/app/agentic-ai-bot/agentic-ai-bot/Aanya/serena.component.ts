import { Component, ElementRef, ViewChild, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { ChatService } from '../../services/serena.service';

interface ChatMessage {
  name: string;
  text: string;
  avatar?: string;
}

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './serena.component.html',
  styleUrls: ['./serena.component.scss']
})
export class serenaComponent implements AfterViewChecked {
  @ViewChild('chatWindow') chatWindow!: ElementRef;

  messages = [
    { text: 'Hello , How May I Help You  !!!', from: 'bot', isFormatted: false }
  ];

  userInput = '';
  isListening = false;
  showChat = true;
  isTyping = false;

  isRecording: boolean = false;
  isRecording2: boolean = false;
  recognition: any;

  constructor(
    private chatService: ChatService,
    public cdr: ChangeDetectorRef
  ) {}

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  formatBotReply(text: string): string {
    return text.replace(/\n/g, '<br>');
  }

  scrollToBottom() {
    try {
      this.chatWindow.nativeElement.scrollTop =
        this.chatWindow.nativeElement.scrollHeight;
    } catch (err) {}
  }

  sendMessage(): void {
    if (!this.userInput.trim()) return;

    const userMsg = this.userInput;
    this.messages.push({ text: userMsg, from: 'user', isFormatted: false });
    this.isTyping = true;

    this.chatService.sendMessage(userMsg).subscribe(
      (res: any) => {
        this.isTyping = false;

        if (res?.reply) {
          if (res?.is_table) {
            this.messages.push({
              text: res.reply,
              from: 'bot',
              isFormatted: true
            });
          } else {
            this.messages.push({
              text: res.reply,
              from: 'bot',
              isFormatted: false
            });
          }

          this.speakText(res.reply);
        }

        if (res?.data?.length > 0) {
          console.log("Fetched ticket data:", res.data);
        }

        this.cdr.detectChanges();
        this.scrollToBottom();
      },
      (err) => {
        console.error('Error:', err);
        const errorMsg = 'Error connecting to backend.';
        this.messages.push({ text: errorMsg, from: 'bot', isFormatted: false });
        this.speakText(errorMsg);
      }
    );

    this.userInput = '';
  }

  toggleRecording(): void {
    if (this.isRecording) {
      this.stopVoiceInput();
    } else {
      this.startVoiceInput();
    }
    this.isRecording = !this.isRecording;
    this.isRecording2 = !this.isRecording2;
  }

  startVoiceInput(): void {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Speech Recognition not supported in this browser.');
      return;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'en-IN';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

    // ---------------------------------------------------------
    // ⭐ UPDATED: WORKING AUTO-SEND + VISIBLE BOT MESSAGE
    // ---------------------------------------------------------
    this.recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;

      this.userInput = transcript;
      this.cdr.detectChanges();

      setTimeout(() => {
        if (this.userInput.trim()) {

          // ⭐ Show user message immediately
          const finalUserMsg = this.userInput;
          this.messages.push({
            text: finalUserMsg,
            from: 'user',
            isFormatted: false
          });

          this.cdr.detectChanges();
          this.scrollToBottom();

          // ⭐ Call backend
          this.chatService.sendMessage(finalUserMsg).subscribe(
            (res: any) => {
              if (res?.reply) {
                if (res?.is_table) {
                  this.messages.push({
                    text: res.reply,
                    from: 'bot',
                    isFormatted: true
                  });
                } else {
                  this.messages.push({
                    text: res.reply,
                    from: 'bot',
                    isFormatted: false
                  });
                }

                this.speakText(res.reply);
              }

              this.cdr.detectChanges();
              this.scrollToBottom();
            },
            (err) => {
              this.messages.push({
                text: "Error connecting to backend.",
                from: "bot",
                isFormatted: false
              });

              this.cdr.detectChanges();
              this.scrollToBottom();
            }
          );

          this.userInput = '';
        }
      }, 3000);
    };
    // ---------------------------------------------------------

    this.recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      this.isRecording = false;
      this.isRecording2 = false;
    };

    this.recognition.onend = () => {
      this.isRecording = false;
      this.isRecording2 = false;
    };

    this.recognition.start();
  }

  stopVoiceInput(): void {
    if (this.recognition) {
      this.recognition.stop();
    }
  }

  speakText(text: string): void {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported.');
      return;
    }

    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(
      text.replace(/<[^>]+>/g, '')
    );

    utter.lang = 'en-IN';
    utter.rate = 1;
    utter.pitch = 1;

    setTimeout(() => {
      window.speechSynthesis.speak(utter);
    }, 150);
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') this.sendMessage();
  }

  autoSend(text: string): void {
    this.userInput = text;
    this.sendMessage();
  }
}
