import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ManageUsersService} from '../manage-users.service'
import {User} from '../user'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  regForm:FormGroup;
  dataSaved:boolean = false;
  message:String;
  //
  constructor(private formBuilder:FormBuilder, private manageUsersService:ManageUsersService) { }

  ngOnInit() {
    this.setFormState();
  }

  setFormState():void{
    this.regForm=this.formBuilder.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],

    });
  }
  onSubmit(){
    let user=this.regForm.value;
    this.createUser(user);
    this.regForm.reset();

  }
  createUser(user:User){
    this.manageUsersService.save(user).subscribe(
      ()=>{
        this.dataSaved=true;
        this.regForm.reset(); 
        this.message="Users Created";
      }
      
    );
  }
}
