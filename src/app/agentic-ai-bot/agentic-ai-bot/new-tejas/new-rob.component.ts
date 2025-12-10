import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { marked } from 'marked';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RagService } from '../../services/rob.service';

interface Message {
  from: 'user' | 'bot' | 'system';
  text: SafeHtml;
  time: string;
  sources?: any[];
}

@Component({
  selector: 'app-new-rob',
  standalone: true,
  imports: [SharedModule, CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './new-rob.component.html',
  styleUrls: ['./new-rob.component.scss']
})
export class NewRobComponent {

  messages: Message[] = [];
  question = '';
  dark = false;
  uploading = false;
  uploadProgress: number = 0;
  botTyping = false;

  // config UI state
  showOptions = false;
  selectedSection: 'prompt' | 'model' | 'dataset' | null = null;

  constructor(
    private rag: RagService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
  ) {}

  // Toggle theme
  toggleDark() {
    this.dark = !this.dark;
  }

  // Convert Markdown to HTML
  convertMarkdown(text: string): SafeHtml {
    const html = marked.parse(text || '') as string;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  // Push a message into chat
  pushMessage(from: Message['from'], text: string, sources?: any[]) {
    this.messages.push({
      from,
      text: this.convertMarkdown(text || ''),
      sources,
      time: new Date().toLocaleTimeString()
    });

    setTimeout(() => {
      const el = document.getElementById('chat-window');
      if (el) el.scrollTop = el.scrollHeight;
    }, 50);
  }

  // Ask a question
  sendQuestion() {
    const q = this.question.trim();
    if (!q) return;

    this.pushMessage('user', q);
    this.question = '';
    this.botTyping = true;

    this.rag.ask(q).subscribe({
      next: (res: any) => {
        this.botTyping = false;

        const botText =
          res.answer ||
          res.response ||
          res.result ||
          res.text ||
          JSON.stringify(res);

        const botSources =
          res.sources ||
          res.docs ||
          res.references ||
          [];

        this.pushMessage('bot', botText, botSources);
      },

      error: () => {
        this.botTyping = false;
        this.pushMessage('system', '⚠ Server error.');
      }
    });
  }

  // File upload
  onFileSelected(event: any) {
    const file = event.target.files?.[0];
    if (!file) return;

    this.uploading = true;

    this.rag.uploadFileWithProgress(file).subscribe({
      next: (evt: any) => {
        if (typeof evt === 'number') {
          this.uploadProgress = evt;
        } else {
          this.uploading = false;
          this.uploadProgress = 0;

          this.pushMessage(
            'system',
            `Uploaded: **${evt.file}**\n\nChunks Processed: **${evt.chunks}**`
          );
        }
      },
      error: () => {
        this.uploading = false;
        this.pushMessage('system', '❌ Upload failed.');
      }
    });
  }

  // ---------------------------
  // CONFIG PANEL LOGIC
  // ---------------------------
  // Clicking "Configural"
  openConfig() {
    this.showOptions = !this.showOptions;

    // if closing config hide selected section
    if (!this.showOptions) {
      this.selectedSection = null;
    }
  }

  // Clicking individual options
  openSection(section: 'prompt' | 'model' | 'dataset') {
    // toggle if same selected
    if (this.selectedSection === section) {
      this.selectedSection = null;
      return;
    }

    this.selectedSection = section;
    // ensure panel is open
    this.showOptions = true;
  }

  // Process everything (stub)
  processAll() {
    console.log("Processing Prompt, Model and Dataset...");
    alert("Processing all inputs...");
  }
}
