import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isRegister = false;
  userArray = [];
  userObj: any = {};
  invalidUser: string;
  registerForm: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToReg(val) {
    if (val === 'register') {
      this.isRegister = true;
    } else {
      this.isRegister = false;
    }
  }

  register() {
    this.invalidUser = '';
    const registeredUser = JSON.parse(localStorage.getItem('userArray'));
    if (registeredUser && registeredUser.length > 0) {
      this.userArray = registeredUser;
    }
    if (Object.keys(this.userObj).length > 0) {
      this.userArray.push({
        email: this.userObj.email,
        password: this.userObj.password,
        first_name: this.userObj.first_name,
        last_name: this.userObj.last_name
      });
      localStorage.setItem('userArray', JSON.stringify(this.userArray));
    }
    this.isRegister = false;
    this.userObj = {};
  }

  login() {
    this.invalidUser = '';
    const registeredUser = JSON.parse(localStorage.getItem('userArray'));
    const ifUser = registeredUser.find(ele => ele.email === this.userObj.email && ele.password === this.userObj.password);
    if (ifUser) {
      this.router.navigate(['/country']);
      this.invalidUser = '';
    } else {
      this.invalidUser = 'Invalid Login';
    }
  }

}
