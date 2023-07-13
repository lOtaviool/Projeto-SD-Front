import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SystemService } from '../../services/system.service';
import { LoaderService } from '../loader/loader.service';

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
        public systemService: SystemService,
        private loaderService: LoaderService,

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
      this.loaderService.showAlert(true)
        this.systemService.createAction(this.myForm?.value).subscribe((res:any)=>{ 
          this.loaderService.showAlert(false)
        }, (err)=>{
          console.log(err)
        })

        this.dialog.close()
      }

    cancel(){
        this.dialog.close()
    }

}