import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-audio-bot',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './audio-bot.component.html',
  styleUrl: './audio-bot.component.scss'
})
export class AudioBotComponent {
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
