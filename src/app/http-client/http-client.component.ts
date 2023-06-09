import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpService } from '../http.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css'],
  providers: [HttpService]
})
export class HttpClientComponent implements OnInit {
  // user: User | undefined;
  // constructor(private httpService: HttpService) {}
  // ngOnInit(): void {
  //   this.httpService.getData().subscribe({next:(data: any) => this.user = new User(data.name, data.age)});
  // }
  // users: User[] = [];
  // error: any;
// num1: number = 0;
// num2: number = 0;
// sum: number | undefined;
// done: boolean = false;

user: User = new User("", 0);
recivedUser: User | undefined;
done: boolean = false;



  constructor(public httpService: HttpService) {}
   ngOnInit(): void {
    //  this.httpService.getUsers().subscribe({next: (data:User[]) => this.users = data});
   }
  //  submit() {
  //   this.httpService.getSum(this.num1, this.num2).subscribe({next: (data: any) => {
  //     this.sum = data.result;
  //     this.done = true;
  //   }})
  // }
  submit(user: User){
    this.httpService.postData(user)
    .subscribe({
      next:(data: any) => {this.recivedUser = data;
      this.done = true;},
      error: error => console.log(error)
    })

  }
}


export class User{
  constructor(public name: string, public age: number){}
}
