import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { Component, OnInit, Inject } from '@angular/core';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  public action: any;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  constructor(
    private dialog: MatDialogRef<LoaderComponent>, 
    @Inject(MAT_DIALOG_DATA) 
    public data: any,
    public systemService: SystemService
  ){ 
    this.action = data.action;
  }

  ngOnInit(): void {
  }

}