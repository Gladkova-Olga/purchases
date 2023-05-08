import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  // title: string = "";
  // price: number = 0;
  // company: string = "";

  // phone = new Phone("", 0, "apple");
  // phones: Phone[] = [];
  // companies: string[] = ["apple", "samsung", "LG", "Xiomi"];
  // addPhone() {
  //   this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company));
  // }

phone = new Phone("", 0, "apple");
companies: string[] = ["apple", "samsung", "LG", "Xiomi"];
addPhone(title: NgModel, price: NgModel, comp: NgModel) {
  console.log(title);
  console.log(price);
  console.log(comp);
}
onTitleChange() {
  if(this.phone.title === "no") {
    this.phone.title = "unknown";
  }
}
}

export class Phone{
  constructor(public title: string, public price: number, public company: string ) {}
}
