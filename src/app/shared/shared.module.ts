import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

const IMPORTS_MODULES = [
	CommonModule, 
	RouterModule, 
	ReactiveFormsModule,
	FormsModule
]

@NgModule({
	declarations: [],
	imports: [...IMPORTS_MODULES],
	providers: [FormGroupDirective],
	exports: [...IMPORTS_MODULES]
})
export class SharedModule {}
