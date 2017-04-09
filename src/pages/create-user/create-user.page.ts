import { Component } from '@angular/core';
import { User } from '../../model/User';
import { UserService } from '../../services/user/user.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'page-create-user',
  templateUrl: 'create-user.page.html'
})
export class CreateUserPage {
  user: User;

  constructor(
    public userService: UserService
  ) {
    this.user = new User();
   }

  postForm(){
    this.userService.postUser(this.user);
  }
}
