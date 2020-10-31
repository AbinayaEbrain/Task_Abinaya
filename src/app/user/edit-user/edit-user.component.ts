import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userObj: any = {};
  id: any;
  usersArray: any = [];
  foundObj = {};
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.usersArray = JSON.parse(localStorage.getItem('userArray'));
    this.foundObj = this.usersArray.filter((ele, i) => i === Number(this.id));
    this.userObj = this.foundObj[0];
  }

  save() {
    this.usersArray.splice(this.id, 1);
    this.usersArray.push({
      email: this.userObj.email,
      password: this.userObj.password,
      first_name: this.userObj.first_name,
      last_name: this.userObj.last_name
    });
    localStorage.setItem('userArray', JSON.stringify(this.usersArray));
    this.router.navigate(['/users']);
  }

}
