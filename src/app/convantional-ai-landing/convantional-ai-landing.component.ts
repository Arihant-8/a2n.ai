import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-convantional-ai-landing',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule   // IMPORTANT → enables navigation
  ],

  templateUrl: './convantional-ai-landing.component.html',
  styleUrl: './convantional-ai-landing.component.scss'
})
export class ConvantionalAiLandingComponent {

  constructor(private route: ActivatedRoute, private router: Router) {}

  openInDashboard(route: string, path: string) {
    this.router.navigate([`/${route}`], { queryParams: { url: path } });
  }

  openInRob(route: string, path: string) {
    this.router.navigate([`/${route}`], { queryParams: { url: path } });
  }

  // ================================
  // CONVENTIONAL BOT NAVIGATION
  // ================================

  chatbot() {
    this.router.navigateByUrl('/chat-bot');
  }

  Audiobot() {
    this.router.navigateByUrl('/audio-bot');
  }

  Retails() {
    this.router.navigateByUrl('/retails');
  }

  healthcare() {
    this.router.navigateByUrl('/healthcare');
  }

  gotohospility() {
    this.router.navigateByUrl('/hospitality');
  }

 gotoComparison() {
    // FIXED → Your comparison bot navigation
    this.router.navigateByUrl('/comparison-bot');
  }

}
