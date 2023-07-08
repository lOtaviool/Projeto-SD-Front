import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from '../shared/services/system.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { removeStyles } from '@angular/flex-layout';

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
        this.getAction();
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

    getAction(){
        this.systemService.getAction().subscribe((res:any)=>{
            console.log(res)
            this.sessionForm = res;
        })
    }

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