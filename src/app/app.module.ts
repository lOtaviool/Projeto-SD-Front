import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/components/material/material.module';
import { HomeModule } from './home/home.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActionsModule } from './actions/actions.module';
import { EditActionComponent } from './shared/dialogs/edit-action/edit-action.component';


@NgModule({
  declarations: [
    AppComponent,
    EditActionComponent

  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    ActionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
