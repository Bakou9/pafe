import { Observable, Subscription } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from '../environment/environment.service';
import { User } from '../../model/User';

@Injectable()
export class UserService {
    private readonly ROUTE: string = 'user';    

    constructor(
        private http: Http,
        private environmentService: EnvironmentService
    ) { }

    public getUser(): Observable<User[]> {
       return this.http.get(this.environmentService.fullUrl + this.ROUTE).map((data) => {
           return data.json();  
        });
    }

    public postUser(user){
        this.http.post(this.environmentService.fullUrl + this.ROUTE, user).subscribe();
    }

}