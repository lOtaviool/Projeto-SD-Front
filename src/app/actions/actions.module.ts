import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../shared/components/material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { ActionsComponent } from './actions.component';


@NgModule({
    declarations: [
        ActionsComponent
        
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule,
        FlexLayoutModule,
        FormsModule,
        SharedModule
    ],
    exports:[
        ActionsComponent
    ],
    providers: [],
    bootstrap: [ActionsComponent]
})
export class ActionsModule { }