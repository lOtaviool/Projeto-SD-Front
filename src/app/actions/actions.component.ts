import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from '../shared/services/system.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { removeStyles } from '@angular/flex-layout';
import { EditActionService } from '../shared/dialogs/edit-action/edit-action.service';
import { CreateActionService } from '../shared/dialogs/create-action/create-action.service';
import { LoaderService } from '../shared/dialogs/loader/loader.service';

@Component({
    selector: 'app-actions',
    templateUrl: './actions.component.html',
    styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
    public actionList: any = [];
    public actionInformationsId = '';
    public sessionForm: any;

    filter: string = '';
    hasMore: boolean = true;
    currentPage: number = 1;
    userName: string = '';

    constructor(
        private activatedRoute: ActivatedRoute,
        private systemService: SystemService,
        private editActionService: EditActionService,
        private createActionService: CreateActionService,
        private loaderService: LoaderService,
        public dialog: MatDialog

    ) { 
        this.loaderService.showAlert(true)
        this.getAction()
        // this.sessionForm = this.systemService.getform()
    }

    ngOnInit(): void {}

    getAction(){
        this.systemService.getAction().subscribe((res:any)=>{
            console.log(res)
            this.actionList = res;
            this.loaderService.showAlert(false)
        })

    }

    viewAction(action: any){
        if(this.actionInformationsId == '' || this.actionInformationsId != action.id){
            this.actionInformationsId = action.id;
            setTimeout(()=>{
                let element: any = document.getElementById('card-informations');
                element.classList.add('card-start');
            }, 200);
        } else{
            let element: any = document.getElementById('card-informations');
            element.classList.remove('card-start');
            setTimeout(()=>{
                this.actionInformationsId = '';
            }, 500);
        }
    }

    createAction(){
        this.createActionService.showAlert();
        this.dialog.afterAllClosed.subscribe((res:any )=>{
            this.getAction();
        })
    }

    editAction(action: any){
        this.editActionService.showAlert(action);
        this.dialog.afterAllClosed.subscribe((res:any )=>{
            this.getAction();

        })
    }

    deleteAction(action: any){
        this.loaderService.showAlert(true)
        this.systemService.deleteAction(action?.id).subscribe((res:any)=>{
            this.getAction();
        })
    }
}