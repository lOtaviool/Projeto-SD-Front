import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-action',
    templateUrl: './create-action.component.html',
    styleUrls: ['./create-action.component.scss']
})
export class CreateActionComponent implements OnInit {

    public myForm : any = FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private dialog: MatDialogRef<CreateActionComponent>, 
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
        this.myForm = this.formBuilder.group({
            codigo:['', [Validators.required]],
            descricao:['', [Validators.required]],
            volume: ['', [Validators.required]],
            id: ['', [Validators.required]],
            high: ['', [Validators.required]],
            close: ['', [Validators.required]],
        })
    }

    ngOnInit(): void {}

    confirm(){
        console.log('FORM',this.myForm)
    }

    cancel(){
        this.dialog.close()
    }

}