import { Component, ContentChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  // counter: number = 0;
  // increment() {
  //   this.counter++;
  // }
  // decrement() {
  //   this.counter--;
  // }

  // @ContentChild('headerContent', {static: false})
  // header: ElementRef|undefined;

  // change() {
  //   if(this.header !== undefined) {
  //     this.header.nativeElement.textContent = "Hello to world"
  //   }
  // }

  // user = new User("", "", "");
  // addUser() {
  //   console.log(this.user);
  // }

  name: string = "";
  email: string = "";
  phone: string = "";

  onSubmit(form: NgForm){
    console.log(form);
  }

}
// export class User{
//   constructor(public name: string, public email: string, public phone: string) {}
// }
