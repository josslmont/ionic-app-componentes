import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'subtitle',
      message: 'This an alert message.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertMultipleButtons(){
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'subtitle',
      message: 'This an alert message.',
      buttons: [
        {
          text: "OK",
          handler: () => {
            console.log('Click en OK');
          }
        },
        {
          text: "Cancel",
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Click en Cancel');
          }
        },
        {
          text: "Delete",
          handler: () => {
            console.log('Click en Delete');
          }
        }
    ]
    });
    await alert.present();
  }

}
