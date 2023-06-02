import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from '../shared/services/system.service';

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
        private systemService: SystemService
    ) { 
        this.sessionForm = this.systemService.getform();
    }

    ngOnInit(): void {
        // this.activatedRoute.params.subscribe(params => {
        //   this.userName = params.userName;
        //   this.photos = this.activatedRoute.snapshot.data['photos'];
        // });
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