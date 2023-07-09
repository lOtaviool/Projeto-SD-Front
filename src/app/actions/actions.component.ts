import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from '../shared/services/system.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { removeStyles } from '@angular/flex-layout';
import { EditActionService } from '../shared/dialogs/edit-action/edit-action.service';
import { CreateActionService } from '../shared/dialogs/create-action/create-action.service';

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
        private createActionService: CreateActionService,
        public dialog: MatDialog

    ) { 
        this.sessionForm = this.systemService.getform()
        
    }

    ngOnInit(): void {}

    getAction(){
        // this.systemService.getAction().subscribe((res:any)=>{
        //     console.log(res)
        //     this.actionList = res;
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

    createAction(){
        this.createActionService.showAlert();
    }

    editAction(action: any){
        this.editActionService.showAlert(action);
    }
}