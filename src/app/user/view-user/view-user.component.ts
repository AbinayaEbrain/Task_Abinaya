import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  userObj: any = {};
  id: any;
  usersArray: any = [];
  foundObj = {};
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.usersArray = JSON.parse(localStorage.getItem('userArray'));
    console.log(this.usersArray);
    this.foundObj = this.usersArray.filter((ele, i) => i === Number(this.id));
    this.userObj = this.foundObj[0];
  }

}
