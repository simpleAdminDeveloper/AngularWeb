import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageUsersService } from './manage-users/manage-users.service';
import {User} from './manage-users/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'societyApp';
  email = new FormControl('');
  user: User;
  public userList = [];
  constructor(private route: ActivatedRoute, private router: Router, private userService: ManageUsersService) {
    this.user = new User();
  }
  onSubmit() {
    // this.email.setValue('ankit@appdividend.com');
    // this.user.email= this.email;
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }
 
  gotoUserList() {
    this.userService.findAll().subscribe(data => this.userList = data);
  }
}
