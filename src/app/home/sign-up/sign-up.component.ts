import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUser } from 'src/app/shared/interfaces/new-user';
import { SystemService } from 'src/app/shared/services/system.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']

})
export class SignUpComponent implements OnInit {
    
    public signupForm: any = FormGroup;
    
    constructor(
        private formBuilder: FormBuilder,
        private systemService: SystemService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email: ['', 
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            userName: ['', 
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ],
                // this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            password: ['', 
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ],
            pswdVerify: ['', 
                [
                    this.checkPasswords,
                    Validators.required
                ]
            ],
        });    
    } 

    checkPasswords: ValidatorFn = ():  ValidationErrors | null => { 
        let pass = this.signupForm.controls?.password.value;
        let confirmPass = this.signupForm.controls?.pswdVerify.value;
        return pass === confirmPass ? null : { notSame: true }
    }

    signup() {
        
        const newUser = this.signupForm.getRawValue() as NewUser;
        console.log(newUser)
        // this.systemService
        // .signup(newUser)
        // .subscribe(
        //     () => this.router.navigate(['']),
        //     err => console.log(err)
        // );
    }
}