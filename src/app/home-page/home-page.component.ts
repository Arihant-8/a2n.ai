import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
   constructor(private router: Router) { }
    
    goToAgenticAI() {
        this.router.navigate(['/agentic-ai-landing']);
    }
    goToConventionalAI() {
        this.router.navigate(['/conventional-ai-landing']);
    }
    goToGenerativeAI() {
        this.router.navigate(['/generative-ai-landing']);
    }
    goToRPA() {
        this.router.navigate(['/rpa']);
    }

}
