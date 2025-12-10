import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.scss'
})
export class ChatBotComponent {
  url: SafeResourceUrl | undefined;
  isvisble = false;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const url = params['url'] || 'https://example.com';
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    });
  }    
}
