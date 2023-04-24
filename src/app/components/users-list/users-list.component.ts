import { Component, OnInit } from '@angular/core';
import { Userslist } from 'src/app/models/user/userslist';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  table1: string = 'Kaushal';
  table2: string = 'kaushal@.com';
  table3: number = 98766587;

  // user: Userslist = {
  //   name: 'KP',
  //   email: 'KP@.com',
  //   number: 9897860698,
  // };

  // userlist: any = [
  //   {
  //     name: 'KP',
  //     email: 'KP@.com',
  //     number: 9897860698,
  //   },

  //   {
  //     name: 'KPpp',
  //     email: 'KP@.com',
  //     number: 9897860698,
  //   },
  //   {
  //     name: 'KPPP',
  //     email: 'KP@.com',
  //     number: 9897860698,
  //   },
  // ];

  userlist: any = [];
  kaushal = this.formBuilder.group(new Userslist());
  users: Userslist[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserServiceService
  ) {}

  ngOnInit(): void {
    this.findAllUsers();
  }

  // find All users...
  findAllUsers() {
    this.userService.findAllUsers().subscribe((data: Userslist[]) => {
      console.log(data);
      this.userlist = data;
    });
  }

  // save all userlist...
  saveAllUsers(users: Userslist[]) {
    this.userService.saveAllUsers(users).subscribe((data: Userslist[]) => {
      console.log(data);
    });
  }

  // delete All users list
  deleteAll() {
    this.userService.deleteAll().subscribe((data: Userslist[]) => {
      console.log(data);
    });
  }

  onSubmit(): void {
    // Process checkout data here
    //this.items = this.cartService.clearCart();

    console.log(this.kaushal);

    let user: any = new Userslist();
    user = this.kaushal.value;
    console.log(user);

    this.users.push(user);

    this.saveAllUsers(this.users);

    // form will be refreshed after add information
    this.kaushal.reset();
  }
}
