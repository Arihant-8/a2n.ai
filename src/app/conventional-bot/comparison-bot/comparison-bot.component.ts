import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comparison-bot',
  standalone: true,
  imports: [CommonModule, HttpClientModule],  
  templateUrl: './comparison-bot.component.html',
  styleUrls: ['./comparison-bot.component.scss'],   // ✅ FIXED
  encapsulation: ViewEncapsulation.None
})
export class ComparisonBotComponent {

   file1: File | null = null;
   file2: File | null = null;
   comparisonResult: any = null;

   constructor(private http: HttpClient) {}

   onFileSelected(event: Event, fileNumber: number): void {
     const input = event.target as HTMLInputElement;
     if (input.files && input.files.length > 0) {
       const file = input.files[0];
       if (fileNumber === 1) this.file1 = file;
       if (fileNumber === 2) this.file2 = file;
     }
   }

   onGenerate(): void {
     if (this.file1 && this.file2) {
       const formData = new FormData();
       formData.append('file', this.file1);
       formData.append('file', this.file2);

       this.http.post('http://127.0.0.1:5000/mask-pdf', formData).subscribe({
         next: response => {
           console.log('API response:', response);
           this.comparisonResult = response;
         },
         error: err => {
           console.error('API error:', err);
         }
       });

     } else {
       console.error('Both files must be selected');
     }
   }

}
