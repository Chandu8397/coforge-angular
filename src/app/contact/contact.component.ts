import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  pname: string = '';
  pemail: string = '';
  pmessage: string = '';
  submittedData: any = '';

  constructor(private router:Router){}

  onSubmit(){
    this.submittedData = {
      name: this.pname,
      email: this.pemail,
      message: this.pmessage
    };

    //After 3 seconds, navigate to 'details' component along with 'submittedData' Object
    setTimeout(() => {
      this.router.navigate(['/det'],{
        state: { data: this.submittedData },
      });
 }, 1000);   //3 Seconds
  }
}
