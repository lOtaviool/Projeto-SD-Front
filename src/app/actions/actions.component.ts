import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from '../shared/services/system.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
    selector: 'app-actions',
    templateUrl: './actions.component.html',
    styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
    public sessionForm: any;

    filter: string = '';
    hasMore: boolean = true;
    currentPage: number = 1;
    userName: string = '';

    constructor(
        private activatedRoute: ActivatedRoute,
        private systemService: SystemService,
        public dialog: MatDialog

    ) { 
        this.sessionForm = this.systemService.getform();
    }

    ngOnInit(): void {
        // this.activatedRoute.params.subscribe(params => {
        //   this.userName = params.userName;
        //   this.photos = this.activatedRoute.snapshot.data['photos'];
        // });
    }

    // openDialog(){
    //     const dialogRef = new MatDialogConfig();
    //     dialogRef.disableClose = true;
    //      this.dialog.open(cdialogRef)
    // }

    load() {
        this.systemService
    //     this.photoService
    //       .listFromUserPaginated(this.userName, ++this.currentPage)
    //       .subscribe(photos => {
    //         this.filter = '';
    //         this.photos = this.photos.concat(photos);
    //         if(!photos.length) this.hasMore = false;
    //       });
    }
}