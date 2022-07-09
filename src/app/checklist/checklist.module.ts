import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ChecklistComponent } from './checklist.component';
import { ChecklistPageRoutingModule } from './checklist-routing.module';



@NgModule({
  declarations: [ChecklistComponent],
  imports: [
    CommonModule,
    ChecklistPageRoutingModule,
    IonicModule
  ]
})
export class ChecklistModule { }
