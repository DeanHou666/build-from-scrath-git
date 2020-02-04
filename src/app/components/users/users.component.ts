import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:User={
    firstName:'',
    lastName:'',
    email:''
  };
  showForm:boolean=false;
  showList:boolean=false;
  users:User[]
  constructor(private userService:UserService) { 
    }
  ngOnInit() {
    this.userService.getUsers().subscribe(users=>{
      this.users=users
    })
  }
  toggleList(user:User){
    user.hide=!user.hide
  }
  onSubmit({value,valid}:{value:User,valid:boolean}){
    if(!valid){
      alert('check out input')
    }else{
      value.hide=false;
      this.users.push(value);
    }
  }
}
