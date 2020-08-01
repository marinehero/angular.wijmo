import { Component } from '@angular/core';

import * as DataService from './app.data';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})

export class GroupComponent {
    colGroups1 = DataService.getColumnGroups();
    colGroups2 = DataService.getDeeperColumnGroups();
    animated = true;
    data = DataService.getData();
    columnGroups = this.colGroups1;
}
