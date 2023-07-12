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
    public form = {};

    constructor(
        private http: HttpClient, 
        private router: Router
    ) {
        this.getform()
    }

	signup(newUser: any) {
		const url = this.url + '/user/signup';
        return this.http.post(url, newUser);
    }

    getAction() {
		const url = `${this.url}/api/app`
		return this.http.get(url);

	}

	createAction(element: any){
		const url = `${this.url}/api/app`
		return this.http.post(url, element);
	}

	editAction(element: any){
		const url = `${this.url}/api/app/${element?.id}`
		return this.http.put(url, element);
	}

	deleteAction(id: any){
		const url = `${this.url}/api/app/${id}`
		return this.http.delete(url);
	}

    getform(): User {
		let stored: any = sessionStorage.getItem("form");
		this.form = JSON.parse(stored);
		if(this.form == null){
			return this.form = {}
		} else {
			return this.form
		}

	}

    updateForm(data: object) {
		this.form = Object.assign(this.form, data);
		sessionStorage.setItem('form', JSON.stringify(this.form));
	}

    clearForm() {
		sessionStorage.removeItem('form');
	}
}