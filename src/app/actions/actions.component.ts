import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from '../shared/services/system.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { removeStyles } from '@angular/flex-layout';
import { EditActionService } from '../shared/dialogs/edit-action/edit-action.service';

@Component({
    selector: 'app-actions',
    templateUrl: './actions.component.html',
    styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
    // public actionList: any = [
    //     {
    //         codigo: 123,
    //         data: '20/02/2023',
    //         volume: 2,
    //         descricao: 'Esta ação é uma porcentagem da empresa Google, e garante ao investidor beneficios futuros.',
    //         high: 33,
    //         id: 1234567890, 
    //         close: 123
    //     },
    //     {
    //         codigo: 456,
    //         data: '20/02/2023',
    //         volume: 5,
    //         descricao: 'Esta ação é uma porcentagem da empresa Google, e garante ao investidor beneficios futuros.',
    //         high: 33,
    //         id: 97627892322,
    //         close: 44
    //     },
    //     {
    //         codigo: 789,
    //         data: '20/02/2023',
    //         volume: 5,
    //         descricao: 'Esta ação é uma porcentagem da empresa Google, e garante ao investidor beneficios futuros.',
    //         high: 33,
    //         id: 97627892322,
    //         close: 44
    //     },
    // ];

    public actionList: any = [];
    public verifyAction: boolean = false;

    public sessionForm: any;

    filter: string = '';
    hasMore: boolean = true;
    currentPage: number = 1;
    userName: string = '';

    constructor(
        private activatedRoute: ActivatedRoute,
        private systemService: SystemService,
        private editActionService: EditActionService,
        public dialog: MatDialog

    ) { 
        // this.getAction();
        this.sessionForm = this.systemService.getform()
        
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
        // this.systemService.getAction().subscribe((res:any)=>{
        //     console.log(res)
        //     this.sessionForm = res;
        // })
        this.actionList = [
                {
                    codigo: 123,
                    data: '20/02/2023',
                    volume: 2,
                    descricao: 'Esta ação é uma porcentagem da empresa Google, e garante ao investidor beneficios futuros.',
                    high: 33,
                    id: 1234567890, 
                    close: 123
                },
                {
                    codigo: 456,
                    data: '20/02/2023',
                    volume: 5,
                    descricao: 'Esta ação é uma porcentagem da empresa Google, e garante ao investidor beneficios futuros.',
                    high: 33,
                    id: 97627892322,
                    close: 44
                },
                {
                    codigo: 789,
                    data: '20/02/2023',
                    volume: 5,
                    descricao: 'Esta ação é uma porcentagem da empresa Google, e garante ao investidor beneficios futuros.',
                    high: 33,
                    id: 97627892322,
                    close: 44
                },
            ];

            this.verifyAction = true
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

    editAction(action: any){
        this.editActionService.showAlert(action);
    }
}