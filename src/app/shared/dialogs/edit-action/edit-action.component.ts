import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-edit-action',
  templateUrl: './edit-action.component.html',
  styleUrls: ['./edit-action.component.scss']
})
export class EditActionComponent implements OnInit {

  public action: any;

  constructor(private dialog: MatDialogRef<EditActionComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.action = data.action;
  }

  ngOnInit(): void {
  }



  cancel(){
    this.dialog.close()
  }

}