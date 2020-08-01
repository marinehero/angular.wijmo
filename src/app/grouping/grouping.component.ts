import '@grapecity/wijmo.styles/wijmo.css';

import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjcGridDetail from '@grapecity/wijmo.grid.detail';

import { DataService } from './app.data';
import { AfterViewInit, Component, ViewChild, Inject } from '@angular/core';

//
@Component({
    selector: 'app-grouping',
    templateUrl: './grouping.component.html',
    styleUrls: ['./grouping.component.css']
})

export class GroupingComponent implements AfterViewInit {

    workers: any;
    workersVw: wjcCore.CollectionView;

    @ViewChild('flexGrid')
    private flexGrid: wjcGrid.FlexGrid;

    // DataSvc will be passed by derived classes
    constructor(@Inject(DataService) private dataService: DataService) {
      this.workers = dataService.getWorkers();
      this.workersVw = new wjcCore.CollectionView(this.workers);
    }
    //
    onLoadedRows(flexGird: wjcGrid.FlexGrid, e: wjcGrid.FormatItemEventArgs) {
        flexGird.rows.forEach(function (row: wjcGrid.Row) {
            row.isReadOnly = false;
        });
    }
    //
    onBeginningEdit(flexGird: wjcGrid.FlexGrid, e: wjcGrid.CellEditEndingEventArgs) {
        const item = flexGird.rows[e.row].dataItem;
        const binding = flexGird.columns[e.col].binding;
        if (!(binding in item)) { // property not on this item?
            e.cancel = true; // can't edit!
        }
    }

    ngAfterViewInit() {

      this.flexGrid.isReadOnly = true;
      this.flexGrid.headersVisibility = wjcGrid.HeadersVisibility.All;

      const dp = new wjcGridDetail.FlexGridDetailProvider(this.flexGrid);
      // dp.detailVisibilityMode = wjcGridDetail.DetailVisibilityMode.ExpandMulti;
      // dp.detailVisibilityMode = wjcGridDetail.DetailVisibilityMode.ExpandSingle;
      dp.detailVisibilityMode = wjcGridDetail.DetailVisibilityMode.ExpandMulti;

      dp.createDetailCell = (row) => {

        // console.log('row.index: ' + row.index);

        const cell = document.createElement('div');
        this.flexGrid.hostElement.appendChild(cell);
        const detailGrid = new wjcGrid.FlexGrid(cell, {
          isReadOnly: false,
          headersVisibility: wjcGrid.HeadersVisibility.None,
          autoGenerateColumns: false,
          itemsSource: this._getSchemeValues(row.dataItem),
          columns: [
            { header: 'Value', binding: 'value', width: '*' }
          ]
        });

        cell.parentElement.removeChild(cell);
        return cell;
      };
    }

    private predicateCheck(dataItem: object, item: any): boolean {
      console.log('item: ' + item);
      return item.workers === dataItem;
    }

    private _getSchemeValues(dataItem: object) {
      console.log('workers: ' + dataItem);
      const index = this.workers.findIndex( (item: any) => this.predicateCheck(dataItem, item) );
      console.log('index: ' + index);
      return this.workers[0]['checks'];
    }

}
