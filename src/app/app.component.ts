import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoggerService } from './services/log4ts/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private router: Router, private logger: LoggerService) {

    // Incorrect source file name and line number :(
    logger.invokeConsoleMethod( 'info', 'AppComponent: logger.invokeConsoleMethod()');
    logger.invokeConsoleMethod( 'warn', 'AppComponent: logger.invokeConsoleMethod()');
    logger.invokeConsoleMethod( 'error', 'AppComponent: logger.invokeConsoleMethod()');

    // Correct source file name and line number :)
    logger.info('AppComponent: logger.info()');
    logger.warn('AppComponent: logger.warn()');
    logger.error('AppComponent: logger.error()');
  }
}
