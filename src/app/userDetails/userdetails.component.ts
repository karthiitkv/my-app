import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service'
import { User } from './user'

@Component({
  selector: 'app-users',
  templateUrl: './userdetails.component.html',
  //template: '<h1>{{title}}</h1><h1> Hello {{hero}}<h1>',
  styleUrls: ['../app.component.css']
})
export class UserdetailsComponent implements OnInit {
  userdetails: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.userService.getUsers().then(users => this.userdetails = users);
  }

}
