import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class HomeService {
    public url = environment.BACKEND_URL;

    constructor(
        private http: HttpClient, 
        private router: Router
    ) {}
}