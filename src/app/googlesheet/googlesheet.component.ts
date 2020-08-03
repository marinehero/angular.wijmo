import { Component, OnInit } from '@angular/core';
import { GoogleSheet, Sheet } from '@grapecity/wijmo.cloud';
import { ComboBox } from '@grapecity/wijmo.input';
import { DataMap } from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-googlesheet',
  templateUrl: './googlesheet.component.html',
  styleUrls: ['./googlesheet.component.css']
})

export class GooglesheetComponent implements OnInit {

  categories: Sheet;
  products: Sheet;
  supplierMap: DataMap;

  constructor() {

      // create the GoogleSheet data source
      const API_KEY = 'AIzaSyCvuXEzP57I5CQ9ifZDG2_K8M3nDa1LOPE';
      const SHEET_ID_NW = '1qnf-FCONZj_AmOlyNkpIA3mKvP8FQtVOr7K8Awpo360';

      const gs = new GoogleSheet(SHEET_ID_NW, API_KEY, {
          sheets: [ 'Products', 'Categories', 'Suppliers' ]
      });

      // expose categories and products
      this.categories = gs.getSheet('Categories');
      this.products = gs.getSheet('Products');

      // expose supplier DataMap
      const suppliers = gs.getSheet('Suppliers');
      this.supplierMap = new DataMap(suppliers, 'SupplierID', 'CompanyName');
  }

  // update product filter when selected category changes
  categoryChanged(categoryCombo: ComboBox) {
      const cat = categoryCombo.selectedItem;
      this.products.filter = item => {
          return cat == null || cat.CategoryID === item.CategoryID;
      };
  }

  ngOnInit(): void {
  }

}
