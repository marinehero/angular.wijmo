import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WjGridSheetModule } from '@grapecity/wijmo.angular2.grid.sheet';

import { WorksheetComponent } from './worksheet.component';

import { CountryService } from '../services/country.service';

import { NgxScrollTopModule } from 'ngx-scrolltop';

@NgModule({
  imports: [
    CommonModule,
    NgxScrollTopModule,
    WjGridSheetModule
  ],
  declarations: [ WorksheetComponent ],
  providers: [ CountryService ],
  exports: [ WorksheetComponent ]
})
export class WorksheetModule { }
