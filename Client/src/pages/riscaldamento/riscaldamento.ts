import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { RoutineProvider } from "../../providers/routine.provider";
import { Routine } from '../../models/routine.model';
import { Location } from "@angular/common";
import { RoutinePage } from '../routine/routine';

@Component({
selector: 'page-stretching',
templateUrl: 'riscaldamento.html',
})
export class RiscaldamentoPage {

    routines : Array<Routine> = [];

    constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    public sRoutine: RoutineProvider, 
    public loadingCtrl: LoadingController,
    public location: Location) {

        const loading = this.loadingCtrl.create({content: "Caricamento"});
        loading.present();
        this.sRoutine.getRoutineByTipo(1)
        .then(result => {
        console.log("dfgh");
        this.routines = result;
        console.log(this.routines);
        loading.dismiss();
    })
    .catch(msg => { 
        loading.dismiss();
        this.alertCtrl.create({
        title: "FitWoman",
        message: "Non è stato possibile recuperare le routine",
        buttons: ["Ok"]
        }).present();
    });
    }

    doAlert(routine: Routine) {
        let alert = this.alertCtrl.create({
        title: routine.nome,
        message: routine.descrizione,
        buttons: ['Ok']
        });
        alert.present()
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RiscaldamentoPage');
    }

    goBack() {
        this.navCtrl.push(RoutinePage);
      console.log('Click on button Test Console Log');
   }
}