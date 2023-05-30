import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollDispatcher, ScrollingModule } from '@angular/cdk/scrolling';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import { MatMenuModule } from "@angular/material/menu";
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
    imports: [
        MatExpansionModule,
        DragDropModule,
        MatChipsModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatDialogModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSnackBarModule,
        MatOptionModule,
        MatSelectModule,
        MatTableModule,
        MatSortModule,
        MatSidenavModule,
        MatTooltipModule,
        ScrollingModule,
        MatMenuModule,
        MatTabsModule
    ],
    exports: [
        MatExpansionModule,
        DragDropModule,
        MatChipsModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatOptionModule,
        MatSelectModule,
        MatTableModule,
        MatSortModule,
        MatSidenavModule,
        MatTooltipModule,
        ScrollingModule,
        MatMenuModule,
        MatTabsModule
    ],
    providers: [
        ScrollDispatcher
    ]
})
export class MaterialModule { }