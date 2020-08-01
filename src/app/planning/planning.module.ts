import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningComponent } from './planning.component';
import { SpreadSheetsModule } from '@grapecity/spread-sheets-angular/dist/gc.spread.sheets.angular';



@NgModule({
  declarations: [PlanningComponent],
  imports: [
    CommonModule,
    SpreadSheetsModule
  ]
})
export class PlanningModule { }
