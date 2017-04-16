import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ConnectionService} from '../providers/connection-service';

import { HomePage } from '../pages/home/home';
import { MenuTeste } from '../pages/menu-teste/menu-teste';
import { AlertPage } from '../pages/alert/alert';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pages: Array<{component: any, title: string, icon: string}>;

  rootPage:any = HomePage;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {

    this.pages= [
      {component:HomePage, title: 'Home', icon:'home'},
      {component:MenuTeste, title: 'Menu Teste', icon:'menu'},
      {component:AlertPage, title: 'Alert page', icon:'alert'},
    ];

    

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: any, menuSide: string ) : void {
    this.rootPage = page.component;
    this.menuCtrl.close(menuSide);
  }

}
