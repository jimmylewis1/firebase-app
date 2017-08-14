import { Component, OnInit, ViewChild } from '@angular/core';
import { Response } from "@angular/http";
import { NgForm } from "@angular/forms";

import {UsersService} from "./users.service";

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.scss']
})
export class UsersComponentComponent implements OnInit {
  @ViewChild('f') userForm: NgForm;

  constructor(private userService: UsersService) { }

  // onSave() {
  //   this.serverService.storeServers(this.servers)
  //       .subscribe();
  // }
  ngOnInit() {
  }

  showUsers() {
    this.userService.getUsers()
        .subscribe(
            (response: Response) => {
              const data = response.json();
              console.log(data);
            },
            (error) => console.log(error)
        );

  }
  onSave(form: NgForm) {
    console.log(this.userForm);
    this.userService.saveUser();
  }

}
