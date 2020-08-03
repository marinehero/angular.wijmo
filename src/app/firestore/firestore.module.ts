import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjChartModule } from '@grapecity/wijmo.angular2.chart';
//
import { FirestoreComponent } from './firestore.component';


@NgModule({
  imports: [WjInputModule, WjGridModule, WjChartModule, BrowserModule, FormsModule],
  declarations: [FirestoreComponent],
  bootstrap: [FirestoreComponent]
})

export class FirestoreModule { }
