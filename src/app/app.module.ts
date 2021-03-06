import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {ConnectionService} from '../providers/connection-service';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Pipe, PipeTransform } from '@angular/core';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuTeste } from '../pages/menu-teste/menu-teste';
import { AlertPage } from '../pages/alert/alert';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuTeste,
    AlertPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,[ConnectionService])
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuTeste,
    AlertPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);