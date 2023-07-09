import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateActionComponent } from './create-action.component';

@Injectable({
    providedIn: 'root'
})
export class CreateActionService {

    constructor(private dialog: MatDialog) { }

    showAlert(){
        this.dialog.open(CreateActionComponent)
    }
}
