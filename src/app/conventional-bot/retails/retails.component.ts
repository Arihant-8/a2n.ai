import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-retails',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './retails.component.html',
  styleUrl: './retails.component.scss'
})
export class RetailsComponent {
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
