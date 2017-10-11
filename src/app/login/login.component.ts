import { Component } from '@angular/core';
import { UserService } from '../userDetails/user.service'
import { User } from '../userDetails/user'
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService,
    private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/home']);
  }
}
