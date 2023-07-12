import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Component, OnInit, Inject } from '@angular/core';
import { SystemService } from '../../services/system.service';

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
    public systemService: SystemService
  ){ 
    this.action = data.action;
  }

  ngOnInit(): void {
  }

  confirm(){
    this.systemService.editAction(this.action).subscribe((res:any)=>{
      console.log('AQUI', res)
    }, (err)=>{
      console.log(err)
    })
  }

  cancel(){
    this.dialog.close()
  }

}