import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {

  formdata: any;

  ngOnInit(){
    this.formdata=new FormGroup({
      emailid: new FormControl("chandu45@gmail.com"),
      passwd: new FormControl("998877")
  });
  }
  onClickSubmit(data:any){
    this.formdata.emailid = data.emailid;
    alert("hello" +this.formdata.emailid);

  }
}
