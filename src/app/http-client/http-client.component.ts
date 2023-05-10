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
  users: User[] = [];
  error: any;

  constructor(public httpService: HttpService) {}
   ngOnInit(): void {
     this.httpService.getUsers().subscribe({next: (data:User[]) => this.users = data});
   }

}

export class User{
  constructor(public name: string, public age: number){}
}
