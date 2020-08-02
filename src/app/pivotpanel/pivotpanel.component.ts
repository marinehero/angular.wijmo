/*import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './styles.css';*/
//
import '@grapecity/wijmo.touch'; // support drag/drop on touch devices
import * as wjOlap from '@grapecity/wijmo.olap';
//
import { Component, OnInit } from '@angular/core';
import { getData } from './app.data';
//
@Component({
  selector: 'app-pivotpanel',
  templateUrl: './pivotpanel.component.html',
  styleUrls: ['./pivotpanel.component.css']
})

export class PivotpanelComponent implements OnInit {

    ng: wjOlap.PivotEngine;

    constructor() {
        this.ng = new wjOlap.PivotEngine({
            autoGenerateFields: false,
            fields: [
                {
                    header: 'Dimensions', subFields: [
                        { header: 'Buyer', binding: 'buyer' },
                        { header: 'Type', binding: 'type' },
                        {
                            header: 'Date', subFields: [
                                { header: 'Year', binding: 'date', format: 'yyyy' },
                                { header: 'Quarter', binding: 'date', format: '"Q"Q' },
                                { header: 'Month', binding: 'date', format: 'MMM' },
                            ]
                        }
                    ]
                },
                {
                    header: 'Measures', subFields: [
                        { header: 'Amount', binding: 'amount', format: 'c0' }
                    ]
                }
            ],
            valueFields: ['Amount'], // summarize amounts
            rowFields: ['Year', 'Quarter'], // by year and quarter
            columnFields: ['Buyer'], // and by buyer
            showRowTotals: 'Subtotals',
            itemsSource: getData(), // raw data
        });
    }
    ngOnInit(): void {
    }

}
