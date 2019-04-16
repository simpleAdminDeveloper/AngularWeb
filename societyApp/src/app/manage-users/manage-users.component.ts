import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ManageUsersService} from './manage-users.service';
import {User} from './user';
import * as $ from 'jquery';
import 'datatables.net';
@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent {
  public dataTable: any;
  public selectedName: string=""
  errorMessage:String;
  successMessage:String;
  email = new FormControl('');
  formGroup: FormGroup;
  user: User;
  public userList = [];
  
  constructor(private chRef: ChangeDetectorRef, private route: ActivatedRoute, private router: Router, private userService: ManageUsersService) {
    this.user = new User();
    this.gotoUserList();
  }
  
  onSubmit() {
    this.errorMessage = undefined;
    this.successMessage = undefined;
    this.userService.save(this.user).subscribe(result => this.gotoUserList(), 
    (error)=>{
      this.errorMessage = error.error.message || "Server Error";
    },
    );
    if(this.errorMessage == undefined){
      this.successMessage = "User successfully Added.";
    }
  }

  gotoUserList() {
    this.userService.findAll().subscribe(data => 
      {
        this.userList = data;
        console.log(this.userList);
        this.chRef.detectChanges();
        this.initDatatable();
      }, 
      (error)=>{
        this.errorMessage = error.error.message || "Server Error";
      },);
      console.log(this.userList);

  }

  // ngAfterViewInit() {
  //   this.initDatatable();
  // }
  
  private initDatatable(): void {
    const exampleId: any = $('#example');
    this.dataTable = exampleId.DataTable({
      responsive: true
    }
    );
    // new $.fn.dataTable.FixedHeader(exampleId);
  }
}
