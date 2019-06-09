import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  private list: any;
  private todo: any;
  private index: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
    if (this.route.snapshot.paramMap.get('index')) {
      this.index = this.route.snapshot.paramMap.get('index');
      this.todo = this.list[this.index];
    }
  }

}
