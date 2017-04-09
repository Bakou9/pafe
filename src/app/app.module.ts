import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserService } from '../services/user/user.service';
import { HttpModule } from '@angular/http';
import { EnvironmentService } from '../services/environment/environment.service';
import { UserDetailPage } from '../pages/user-detail/user-detail.page';
import { CreateUserPage } from '../pages/create-user/create-user.page';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    UserDetailPage,
    CreateUserPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    UserDetailPage,
    CreateUserPage
  ],
  providers: [
    EnvironmentService,
    UserService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
