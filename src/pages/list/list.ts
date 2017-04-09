import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/User';
import { UserService } from '../../services/user/user.service';
import { Observable } from 'rxjs/Rx';
import { UserDetailPage } from '../user-detail/user-detail.page';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  users: Observable<User[]>;
  items: Array<{ title: string, note: string, icon: string }>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserService
  ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.users = this.userService.getUser();
  }

  itemTapped(event, user) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(UserDetailPage, {
      user: user
    });
  }
}
