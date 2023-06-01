import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class SystemService {
    public url = environment.BACKEND_URL;

    constructor(
        private http: HttpClient, 
        private router: Router
    ) {}

    authLogin(user:any){
        console.log(user);
    }
}