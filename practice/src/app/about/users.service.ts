import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { IUsers } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient){
  }
  getUsers(){
    return this.http.get<IUsers>(this.url);
  }
}
// get return an observable which needs to be cast into a format for our app that represents an array of users