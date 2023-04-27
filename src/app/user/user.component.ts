import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  counter: number = 0;
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }

  @ContentChild('headerContent', {static: false})
  header: ElementRef|undefined;

  change() {
    if(this.header !== undefined) {
      this.header.nativeElement.textContent = "Hello to world"
    }
  }

}
