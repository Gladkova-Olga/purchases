import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  myForm: FormGroup;
  constructor(){
    this.myForm= new FormGroup({
      "userName": new FormControl("Ann", Validators.required),
      "userEmail": new FormControl("", [Validators.required, Validators.email]),
      "userPhone": new FormControl("", Validators.pattern("[0-9]{10}"))
    });

  }; 
  submit(){
      console.log(this.myForm)
  }
  


}
