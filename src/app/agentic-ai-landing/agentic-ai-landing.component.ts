import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-agentic-ai-landing',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './agentic-ai-landing.component.html',
  styleUrl: './agentic-ai-landing.component.scss'
})
export class AgenticAiLandingComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}  
   
  
    openInDashboard(route:string, path: string) {
      this.router.navigate([`/${route}`], { queryParams: { url: path } });
    }

       openInRob(route:string, path: string) {
      this.router.navigate([`/${route}`], { queryParams: { url: path } });
    }


    gotoRob(){
this.router.navigateByUrl('/rob');
    }

    gotosarina(){
      this.router.navigate(['/serena']);

    }

       gotoreena(){
      this.router.navigate(['/reena']);

    }

    gotoSandra(){
            this.router.navigate(['/sandra']);

    }

    gotoMax(){
                  this.router.navigate(['/max']);

    }
    gotoJuli(){
                        this.router.navigate(['/juli']);

    }
    
}
