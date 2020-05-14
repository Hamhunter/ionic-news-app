import { Component, OnInit } from '@angular/core';
import {NewsService} from "../news.service";

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.page.html',
  styleUrls: ['./single-news.page.scss'],
})
export class SingleNewsPage implements OnInit {
article;
  constructor(private newsService : NewsService) { }

  ngOnInit() {
    this.article=this.newsService.currentarticle;
    console.log(this.newsService.currentarticle);
  }

}
