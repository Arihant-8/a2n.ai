import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
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
