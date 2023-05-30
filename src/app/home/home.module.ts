import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MaterialModule } from '../shared/components/material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        HomeComponent,
        SignInComponent
        
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HomeRoutingModule,
        MaterialModule,
        AppRoutingModule,
        FlexLayoutModule,
        FormsModule,
        SharedModule
    ],
    exports:[
        HomeComponent,
        SignInComponent
    ],
    providers: [],
    bootstrap: [HomeComponent]
})
export class HomeModule { }