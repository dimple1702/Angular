import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  posts:any = [];
  page = 1;
  pageSize = 9;
  collectionSize:any;

  constructor(private user: UsersService) {
  }

  ngOnInit(){
    this.user.getUsers().subscribe(data=>{
      this.posts = data;
      this.collectionSize = this.posts.length;
    })
    
  }
}

/* we have an instance of usersService to call getUsers() method which returns an observable. To receive data, we need to
subscribe to it. Once we subscribe to observable, the user-data arrives asynchoronously, we assign our data to class 
property using the arrow syntax
*/