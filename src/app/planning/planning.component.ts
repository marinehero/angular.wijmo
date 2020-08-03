import { Component, OnInit, HostListener } from '@angular/core';
import * as GC from '@grapecity/spread-sheets';
import { ImageRowHeaderCellType, sampleImgBase64 } from './imageCellType';

GC.Spread.Sheets.LicenseKey = 'PEREIRA,E724567677254722#B0zhBGM9FXVxlWWpdXezIXOr9ERFR4YFpUWoVnMQFlVQFUVQVXRVNnawBHVYNFNH5ENm96dpFXdMBjRLtmRYl7dxFHUL9ENy5mZwRzRsZWOspFZhd5NsZUQTdUROJ7Ki9GTvg7KsRTMndVYT3kYyklZDJFNGlXY4kFNKF5TDBHWFhnQndmTxIFbERFVvkneGV7KL9WeXtmdWpGZrJFUBNTYEJ4cwpnNmZGWWlmNOVkWLFzUhx6QlVmRTF4RNVTcXp5UrYVYtt6TvtSWwZmbmZFcDBnWhxUOJtEToVkVRNHdCFVWZNjbyUGMMZERiojITJCLiE4MDRTQDFjMiojIIJCL7MDO4QjN5YzN0IicfJye&Qf35VfiU5TzYjI0IyQiwiIzEjL6ByUKBCZhVmcwNlI0IiTis7W0ICZyBlIsIyMykDMxADIzADOwAjMwIjI0ICdyNkIsIiMwkDMwIDMyIiOiAHeFJCLiEkUJVkUFBlI0ISYONkIsUWdyRnOiwmdFJCLiIjM7QTNyczN6cjN5QjM7IiOiQWSiwSflNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TP7h5V0tkawdUYNNlN4UmUw24V684bix4VyA7NzpFSEBzKmFzQIJWS92EWxkDcBl7Nx5EcutyQvNkb4gXc7EHVCRjNCl5YhVkbO3iYUR6MrI7UpdDWIlGT8N5bQdDM4QHUxc4QSB5MBljnDBU';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})

export class PlanningComponent implements OnInit {

  title = 'spreadjs-angular-app';
  spreadBackColor = 'aliceblue';
  sheetName = 'Java 101 Chapters';
  hostStyle = {
    width:  '800px',
    height: '900px',
  };
  data: any;
  rowOutlineInfo: any;
  showRowOutline = true;

  constructor() {
    // This is the base data that we will bind to the Spread instance
    const commands = [
      { name: 'Preface', chapter: '1', page: 1, indent: 0 },
      { name: 'Java SE5 and SE6', chapter: '1.1', page: 2, indent: 1 },
      { name: 'Java SE6', chapter: '1.1.1', page: 2, indent: 3 },
      { name: 'The 4th edition', chapter: '1.2', page: 2, indent: 1 },
      { name: 'Changes', chapter: '1.2.1', page: 3, indent: 2 },
      { name: 'Note on the cover design', chapter: '1.3', page: 4, indent: 1 },
      { name: 'Acknowledgements', chapter: '1.4', page: 4, indent: 1 },
      { name: 'Introduction', chapter: '2', page: 9, indent: 0 },
      { name: 'Prerequisites', chapter: '2.1', page: 9, indent: 1 },
      { name: 'Learning Java', chapter: '2.2', page: 10, indent: 1 },
      { name: 'Goals', chapter: '2.3', page: 10, indent: 1 },
      { name: 'Teaching from this book', chapter: '2.4', page: 11, indent: 1 },
      { name: 'JDK HTML documentation', chapter: '2.5', page: 11, indent: 1 },
      { name: 'Exercises', chapter: '2.6', page: 12, indent: 1 },
      { name: 'Foundations for Java', chapter: '2.7', page: 12, indent: 1 },
      { name: 'Source code', chapter: '2.8', page: 12, indent: 1 },
      { name: 'Coding standards', chapter: '2.8.1', page: 14, indent: 2 },
      { name: 'Errors', chapter: '2.9', page: 14, indent: 1 },
      { name: 'Introduction to Objects', chapter: '3', page: 15, indent: 0 },
      {
        name: 'The progress of abstraction',
        chapter: '3.1',
        page: 15,
        indent: 1,
      },
      {
        name: 'An object has an interface',
        chapter: '3.2',
        page: 17,
        indent: 1,
      },
      {
        name: 'An object provides services',
        chapter: '3.3',
        page: 18,
        indent: 1,
      },
      {
        name: 'The hidden implementation',
        chapter: '3.4',
        page: 19,
        indent: 1,
      },
      {
        name: 'Reusing the implementation',
        chapter: '3.5',
        page: 20,
        indent: 1,
      },
      { name: 'Inheritance', chapter: '3.6', page: 21, indent: 1 },
      {
        name: 'Is-a vs. is-like-a relationships',
        chapter: '3.6.1',
        page: 24,
        indent: 2,
      },
      {
        name: 'Interchangeable objects with polymorphism',
        chapter: '3.7',
        page: 25,
        indent: 1,
      },
      {
        name: 'The singly rooted hierarchy',
        chapter: '3.8',
        page: 28,
        indent: 1,
      },
      { name: 'Containers', chapter: '3.9', page: 28, indent: 1 },
      {
        name: 'Parameterized types (Generics)',
        chapter: '3.10',
        page: 29,
        indent: 1,
      },
      {
        name: 'Object creation & lifetime',
        chapter: '3.11',
        page: 30,
        indent: 1,
      },
      {
        name: 'Exception handling: dealing with errors',
        chapter: '3.12',
        page: 31,
        indent: 1,
      },
      { name: 'Concurrent programming', chapter: '3.13', page: 32, indent: 1 },
      { name: 'Java and the Internet', chapter: '3.14', page: 33, indent: 1 },
      { name: 'What is the Web?', chapter: '3.14.1', page: 33, indent: 2 },
      {
        name: 'Client-side programming',
        chapter: '3.14.2',
        page: 34,
        indent: 2,
      },
      {
        name: 'Server-side programming',
        chapter: '3.14.3',
        page: 38,
        indent: 2,
      },
      { name: 'Summary', chapter: '3.15', page: 38, indent: 1 },
      { name: 'End', chapter: '', indent: null },
    ];

    // Create a rowOutlineInfo object for each row
    this.rowOutlineInfo = [];
    for (let r = 0; r < commands.length; r++) {
      let subRows = 0;
      // Get the number of rows that subrows to the current one and add them to the outline
      for (let r2 = r + 1; r2 < commands.length; r2++) {
        if (commands[r2].indent > commands[r].indent) {
          subRows++;
        }
        if (
          r2 === commands.length - 1 ||
          commands[r2].indent === commands[r].indent
        ) {
          const i = { index: r + 1, count: subRows };
          this.rowOutlineInfo.push(i);
          break;
        }
      }

      // Add tabs based on the indent column
      for (let i = 0; i < commands[r].indent; i++) {
        commands[r].name = '\t\t\t\t\t' + commands[r].name;
      }
    }

    // Set the data for Spread
    this.data = commands;
  }

  @HostListener('window:resize', ['$event.target'])
  onResize(event: Window): void {
    // event.innerWidth;
    const container = document.querySelector('.container-fluid');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const minSize = Math.min(containerWidth, containerHeight);
    this.hostStyle.height = minSize + 'px';
    this.hostStyle.width = minSize + 'px';
    /*if (containerWidth > containerHeight) {
      infoWrapper.style.width = containerWidth - minSize - 2 + 'px';
      infoWrapper.style.height = '100%';
    } else {
      infoWrapper.style.width = '100%';
      infoWrapper.style.height = containerHeight - minSize - 2 + 'px';
    }*/
    console.log(event);
  }

  ngOnInit(): void {
  }

  workbookInit(args: any) {
    const spread: GC.Spread.Sheets.Workbook = args.spread;
    const sheet = spread.getActiveSheet();

    sheet
      .getCell(0, 0)
      .text('Planning Preface')
      .foreColor;

    // add outlines
    sheet.suspendPaint();
    sheet.rowOutlines.group(1, 10);
    sheet.rowOutlines.group(1, 4);
    sheet.rowOutlines.group(6, 4);

    sheet.columnOutlines.group(1, 3);
    sheet.columnOutlines.group(1, 2);

    this.setImageInRowHeader(sheet);

    sheet.resumePaint();

  }

  setImageInRowHeader(sheet: any) {
    const imageCellType = new ImageRowHeaderCellType(sampleImgBase64);
    sheet.setCellType(0, 0, imageCellType, GC.Spread.Sheets.SheetArea.rowHeader);
  }

}
