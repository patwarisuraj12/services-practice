import { Component, OnInit } from '@angular/core';

import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  ngOnInit(){
    this.users = this.usersService.inactiveUsers;
  }

  constructor(private usersService : UserService){}

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
