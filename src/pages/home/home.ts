import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductoPage } from '../producto/producto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  irsubcategoria(){
    this.navCtrl.push(ProductoPage);
  }
}
