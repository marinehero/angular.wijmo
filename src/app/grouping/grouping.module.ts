import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { DataService } from './app.data';
import { GroupingComponent } from './grouping.component';
import { CommonModule } from '@angular/common';
import { WjGridDetailModule } from '@grapecity/wijmo.angular2.grid.detail';
import { WjGridSheetModule } from '@grapecity/wijmo.angular2.grid.sheet';

@NgModule({
  imports: [
    CommonModule,
    WjGridModule,
    WjGridSheetModule,
    WjGridDetailModule,
    BrowserModule
  ],
  declarations: [GroupingComponent],
  providers: [DataService],
  bootstrap: [GroupingComponent]
})

export class GroupingModule {}
