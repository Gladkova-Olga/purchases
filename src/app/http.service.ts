import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { User } from './http-client/http-client.component';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  errorMessage: String = "";
  constructor(private http: HttpClient) { }
  // getData() {
    // return this.http.get('assets/user.json')
  //   return this.http.get('assets/users.json')
  // }

  getUsers(): Observable<User[]> {
    return this.http.get('assets/usersP.json').pipe(map((data:any) => {
      let userList = data["userList"];
      return userList.map((user: any): User => new User(user.userName, user.userAge) )
    }), catchError(err => {
      console.log(err);
      this.errorMessage = err.message;
      return [];
    }))
  }


  
}
