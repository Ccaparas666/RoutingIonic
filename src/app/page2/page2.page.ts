import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { Page1Page } from '../page1/page1.page';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  goToPage1(){
    this.navCtrl.navigateForward('page1');
  }
  ngOnInit() {
  }

}
