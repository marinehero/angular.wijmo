import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WjOlapModule } from '@grapecity/wijmo.angular2.olap';
import { CommonModule } from '@angular/common';
import { PivotpanelComponent } from './pivotpanel.component';

@NgModule({
  declarations: [PivotpanelComponent],
  imports: [WjOlapModule, BrowserModule],
  bootstrap: [PivotpanelComponent]
})

export class PivotpanelModule {

}
