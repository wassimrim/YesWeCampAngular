import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/profile/User';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  
  users: Observable<User[]>;
 

  userr:Observable<Object>;

   userVariable: Array<any>=[];

   userVariable1: Array<any>=[];
   

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.reloadData();

  }


  reloadData() {
    this.users = this.userService.getUsersList();
  }

  suppressionUsers(userId) {
    alert(userId);
   
    this.userService.deleteUser(userId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  };


}
