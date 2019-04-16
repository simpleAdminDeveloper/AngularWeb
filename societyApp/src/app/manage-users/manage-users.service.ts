import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';
@Injectable({
  providedIn: 'root'
})
export class ManageUsersService {
  private usersUrl: string;
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8081/manage-users/user';
  }

  public findAll(): Observable<User[]> {
    // this.http.get(this.usersUrl).subscribe((res : any[])=>{
    //   console.log(res);
    //   this.userList = res;
    //   });
      return this.http.get<User[]>(this.usersUrl);
  }
 
  public save(user: User) {
    let headers = new Headers();
    return this.http.put<User>(this.usersUrl, user);
  }

  errorHandler(error: HttpErrorResponse){
    
  }


}
