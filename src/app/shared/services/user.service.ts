import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import { User } from '../interfaces/user';

@Injectable({ providedIn: 'root'})
export class UserService { 

    private userSubject = new BehaviorSubject<User>({});
    private userName: any =  String;

    constructor(private tokenService: TokenService) { 

        this.tokenService.hasToken() && 
            this.decodeAndNotify();
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = token;
        // this.userName = user?.name;
        // this.userSubject.next(user);
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next({});
    }

    isLogged() {
        return this.tokenService.hasToken();
    }

    getUserName() {
        return this.userName;
    }
}