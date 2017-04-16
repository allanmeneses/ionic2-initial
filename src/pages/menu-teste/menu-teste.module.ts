import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuTeste } from './menu-teste';

import {LowerCase} from '../pipes/lowercase';


@NgModule({
  declarations: [
    MenuTeste,
    LowerCase
  ],
  imports: [
    IonicPageModule.forChild(MenuTeste),
  ],
  exports: [
    MenuTeste
  ]
})
export class MenuTesteModule {}
