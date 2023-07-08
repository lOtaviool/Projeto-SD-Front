import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditActionComponent } from './edit-action.component';

@Injectable({
  providedIn: 'root'
})
export class EditActionService {

  constructor(private dialog: MatDialog) { }

  showAlert(element: any){
    this.dialog.open(EditActionComponent, {data: {
      action: element,
    }})
  }
}
