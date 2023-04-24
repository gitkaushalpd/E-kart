import { Component, OnInit } from '@angular/core';
import { Userslist } from 'src/app/models/user/userslist';
// import { FormBuilder } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  // users: Userslist[] = [];

  // checkoutForm = this.formBuilder.group({
  //   name: [this.user.name],
  //   email: [this.user.email],
  //   mobile: [this.user.number],
  // });

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {}

  saveAllUsers(users: Userslist[]) {
    console.log(users);
    this.userService.saveAllUsers(users).subscribe((data: Userslist[]) => {
      console.log(data);
    });
  }

  // onSubmit(): void {
  //   // Process checkout data here
  //   //this.items = this.cartService.clearCart();

  //   console.log(this.kaushal);

  //   let user: any = new Userslist();
  //   user = this.kaushal.value;
  //   console.log(user);

  //   this.users.push(user);

  //   this.saveAllUsers(this.users);

  //   // console.log(thus)
  //   console.warn('Your order has been submitted', this.kaushal.value);
  //   this.kaushal.reset();
  // }
}
