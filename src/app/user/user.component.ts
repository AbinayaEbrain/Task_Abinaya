import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  usersArray = [];
  p: any;

  constructor(private apiService: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersArray = JSON.parse(localStorage.getItem('userArray'));
  }

  edit(id) {
    this.router.navigate(['/users/' + id]);
  }

  view(id) {
    this.router.navigate(['/view/' + id]);
  }

  delete(id) {
    this.usersArray.splice(id, 1);
    localStorage.setItem('userArray', JSON.stringify(this.usersArray));
  }

}
