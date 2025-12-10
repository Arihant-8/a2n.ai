import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-generative-ai-landing',
  standalone: true,
  imports: [CommonModule, FormsModule,SharedModule, RouterModule],
  templateUrl: './generative-ai-landing.component.html',
  styleUrl: './generative-ai-landing.component.scss'
})
export class GenerativeAiLandingComponent {

}
