import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  myForm: FormGroup;
  // constructor(){
  //   this.myForm= new FormGroup({
  //     "userName": new FormControl("Ann", [Validators.required, this.userNameValidator]),
  //     "userEmail": new FormControl("", [Validators.required, Validators.email]),
  //     // "userPhone": new FormControl("", Validators.pattern("[0-9]{10}"))
  //     "phones": new FormArray([
  //       new FormControl("+370", Validators.required)
  //     ])
  //   });

  // }; 

  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      "userName": ["Ann", [Validators.required]],
      "userEmail": ["", [Validators.required, Validators.email]],
      "phones": formBuilder.array([
       [ "+370", Validators.required]])
    })
  }
  submit(){
      console.log(this.myForm)
  } 
  getFormControls(): FormArray{
    return this.myForm.controls['phones'] as FormArray;
  }
  addPhone() {
    (<FormArray>this.myForm.controls['phones']).push(new FormControl("+370", Validators.required))
  }
  userNameValidator(control: FormControl): {[s:string] :boolean} | null{
    if(control.value === "no") {
      return{'userName': true}
    }
    return null;
  }
  


}
