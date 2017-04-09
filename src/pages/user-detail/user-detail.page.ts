import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/User';
import { UserService } from '../../services/user/user.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.page.html'
})
export class UserDetailPage {
  user: User;
  items: Array<{ title: string, note: string, icon: string }>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserService
  ) {
    this.user = navParams.get('user')
  }
}
