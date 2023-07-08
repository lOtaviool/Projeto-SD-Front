import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Injectable({
    providedIn: 'root',
})
export class SystemService {
    public url = environment.BACKEND_URL;
    public form:any;

    constructor(
        private http: HttpClient, 
        private router: Router
    ) {
        // this.getform()
    }

	signup(newUser: any) {
		const url = this.url + '/user/signup';
        return this.http.post(url, newUser);
    }

    getAction() {
		const url = `${this.url}/api/app`
		return this.http.get(url);

	}

    updateForm(data: object) {
		this.form = Object.assign(this.form, data);
		sessionStorage.setItem('form', JSON.stringify(this.form));
	}

    clearForm() {
		sessionStorage.removeItem('form');
	}
}