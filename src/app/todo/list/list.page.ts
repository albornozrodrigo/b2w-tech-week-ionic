import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  private list: any;

  constructor(public toast: ToastController, public router: Router) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
  }

  remove(index: number) {
    this.list.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(this.list));
    this.presentToast('To-do removida com sucesso!');
  }

  edit(index: number) {
    this.router.navigate(['/create-update', { index }]);
  }

  details(index: number) {
    this.router.navigate(['/details', { index }]);
  }

  async presentToast(text: string) {
    const toast = await this.toast.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }

}
