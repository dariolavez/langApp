import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistComponent } from './checklist.component';
import { ChecklistPageRoutingModule } from './checklist-routing.module';



@NgModule({
  declarations: [ChecklistComponent],
  imports: [
    CommonModule,
    ChecklistPageRoutingModule 
  ]
})
export class ChecklistModule { }
