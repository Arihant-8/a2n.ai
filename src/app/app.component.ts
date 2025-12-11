import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showBackButton = false;

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        const url = event.urlAfterRedirects;

        console.log("URL:", url);

        // ⭐ HIDE BACK BUTTON ONLY ON LOGIN PAGE (path: '')
        if (url === '/' || url === '') {
          this.showBackButton = false;
        } else {
          this.showBackButton = true;
        }
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
