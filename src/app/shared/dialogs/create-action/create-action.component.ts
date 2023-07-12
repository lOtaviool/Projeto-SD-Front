import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SystemService } from '../../services/system.service';

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
        public systemService: SystemService
    ) {
        this.myForm = this.formBuilder.group({
            codigo:['', [Validators.required]],
            data: ['', [Validators.required]],
            descricao:['', [Validators.required]],
            volume: ['', [Validators.required]],
            high: ['', [Validators.required]],
            low: ['', [Validators.required]],
            open: ['', [Validators.required]],
            close: ['', [Validators.required]],
        })
    }

    ngOnInit(): void {}

    confirm(){
      this.dialog.close(this.myForm?.value)
        // this.systemService.createAction(this.myForm?.value).subscribe((res:any)=>{ 
        //   if(res){
        //     this.dialog.close(res)
        //   }
        // }, (err)=>{
        //   console.log(err)
        // })
      }

    cancel(){
        this.dialog.close()
    }

}