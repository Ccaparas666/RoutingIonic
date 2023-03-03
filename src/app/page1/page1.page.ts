import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { Page2Page } from '../page2/page2.page';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  
  constructor(private navCtrl: NavController) { }

  goToPage2(){
    this.navCtrl.navigateForward('page2');
  }

  goToPage3(){
    this.navCtrl.navigateForward('page2');
  }

  ngOnInit() {
  }

}
