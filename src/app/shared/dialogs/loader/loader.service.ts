import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoaderComponent } from './loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private dialog: MatDialog) { }

  showAlert(element: any){
    if(element){
        this.dialog.open(LoaderComponent, {data: {
          action: element,
        }})
    } else {
        this.dialog.closeAll()
    }
  }
}