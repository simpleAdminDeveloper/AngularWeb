import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManageUsersRoutingModule } from './manage-users-routing.module';
import { ManageUsersComponent } from './manage-users.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [ManageUsersComponent, AddUserComponent],
  imports: [
    CommonModule,
    ManageUsersRoutingModule,
    FormsModule
  ]
})
export class ManageUsersModule { }
