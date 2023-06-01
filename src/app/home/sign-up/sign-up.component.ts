import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']

})
export class SignUpComponent implements OnInit {
    
    public signupForm: any = FormGroup;
    
    constructor(
        private formBuilder: FormBuilder,
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
            fullName: ['', 
                [
                    Validators.required,
                    Validators.minLength(5),
                    Validators.maxLength(40)
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
            ]
        });    
    } 

    signup() {
        // const newUser = this.signupForm.getRawValue() as NewUser;
        // this.signUpService
        //     .signup(newUser)
        //     .subscribe(
        //         () => this.router.navigate(['']),
        //         err => console.log(err)
        //     );
    }
}