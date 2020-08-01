import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group.component';
import { FormsModule } from '@angular/forms';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

@NgModule({
  declarations: [GroupComponent],
  imports: [
    CommonModule,
    FormsModule,
    WjGridModule
  ]
})

export class GroupModule { }
