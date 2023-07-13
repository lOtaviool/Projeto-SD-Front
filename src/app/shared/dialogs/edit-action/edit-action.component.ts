import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Component, OnInit, Inject } from '@angular/core';
import { SystemService } from '../../services/system.service';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-edit-action',
  templateUrl: './edit-action.component.html',
  styleUrls: ['./edit-action.component.scss']
})
export class EditActionComponent implements OnInit {

  public action: any;

  constructor(
    private dialog: MatDialogRef<EditActionComponent>, 
    @Inject(MAT_DIALOG_DATA) 
    public data: any,
    public systemService: SystemService,
    private loaderService: LoaderService,
  ){ 
    this.action = data.action;
  }

  ngOnInit(): void {
  }

  confirm(){   
    this.loaderService.showAlert(true)
    this.systemService.editAction(this.action).subscribe((res:any)=>{
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