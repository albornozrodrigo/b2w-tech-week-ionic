import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.page.html',
  styleUrls: ['./create-update.page.scss'],
})
export class CreateUpdatePage implements OnInit {
  private list: any;
  private todo: any;
  private index: any;

  constructor(public toast: ToastController, private route: ActivatedRoute) {
    this.todo = {
      checked: false
    };
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
    if (this.route.snapshot.paramMap.get('index')) {
      this.index = this.route.snapshot.paramMap.get('index');
      this.todo = this.list[this.index];
    }
  }

  save() {
    if (this.todo.name && this.todo.description) {
      this.list.push(this.todo);
      localStorage.setItem('list', JSON.stringify(this.list));
      this.presentToast('To-do adicionada com sucesso!');
    } else {
      this.presentToast('Preencha os campos corretamente!');
    }
  }

  async presentToast(text: string) {
    const toast = await this.toast.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }

}
