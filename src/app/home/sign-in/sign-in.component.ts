import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SystemService } from "src/app/shared/services/system.service";

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
    public myForm: any = FormGroup;
    public sessionForm: any;

    constructor(
        private systemService: SystemService,
        private formBuilder: FormBuilder,
        private router: Router,
		private route: ActivatedRoute,
    ){
        
    }

    ngOnInit(): void {
        this.initForm();
    }

    initForm(){
        this.myForm = this.formBuilder.group({
            email: ['', [
                Validators.required, 
                Validators.email
            ]],
            password: ['', [
                Validators.required, 
                Validators.minLength(8),
                Validators.maxLength(20)
            ]],
        })
    }

    login(){
        if(this.myForm.valid){
            const form = {
                email: this.myForm.controls.email.value,
                password: this.myForm.controls.password.value,
                name: 'Luis Otávio',
                id: 1
            }
            this.systemService.updateForm(form)
            this.router.navigate(['actions']);
        }
    }
}