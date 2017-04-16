import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Alert page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  user: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Alert');
  }

  showAlert() : void{
    let alerta = this.alertCtrl.create({
      title: 'Alerta!',
      message: 'Digite seu nome:',
      inputs:[{
        name: 'nomeusuario',
        placeholder: 'Seu nome'
      }],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'OK',
          handler: (data) =>{
            this.user = data.nomeusuario;
          }
        }
      ]
    });
    alerta.present();
  }

}
