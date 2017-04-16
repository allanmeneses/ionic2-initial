import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ConnectionService} from '../../providers/connection-service';

@IonicPage()
@Component({
  selector: 'page-menu-teste',
  templateUrl: 'menu-teste.html',
  providers: [ConnectionService]
})
export class MenuTeste {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private connectionService: ConnectionService,
    public pipesssdf:ConnectionService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuTeste');
  }

  buscarCEP(): void{
    this.connectionService.getCep('74610230')
    .then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    }) ;
  }
}
