import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { UserComponent } from './user/user.component';
import { compileDeclareInjectableFromMetadata } from '@angular/compiler';
     
 
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { 
// name: string = "Ann";
// age: number = 30;
// clicks: number = 0;
// onChanged(increased: any) {
//   increased ? this.clicks++ : this.clicks--;
// }
name: string= "Mari";

@ViewChild(UserComponent, {static: false})
private counterComponent: UserComponent| undefined;
// increment() { this.counterComponent?.increment();}
// decrement() { this.counterComponent?.decrement();}

increment() { this.counterComponent?.increment();  }
decrement() { this.counterComponent?.decrement(); }

@ViewChild("nameText", {static: false})
nameParagraph: ElementRef|undefined;

change(){
    if(this.nameParagraph !== undefined) {
        console.log(this.nameParagraph.nativeElement.textContent);
        this.nameParagraph.nativeElement.textContent = "hello"
    }
}

condition: boolean = true;
toggle() {
    this.condition = !this.condition;
}

items = ["1", "2", "3"];
count: number = 5;
    
}