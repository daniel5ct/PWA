import { Component, OnInit } from '@angular/core';
import { CatImage } from '../Models/CatImage';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.less']
})
export class ImgCardComponent implements OnInit {
  private image: CatImage = {
    message: 'Progressive Web Cat',
    api: 'https://cataas.com/cat/says/',
    fontsize: 40
  };

  public src: string;

  ngOnInit() {
   this.generateSrc();
  }

  private generateSrc(): void {
    this.src = this.image.api + this.image.message +
    '?size=' + this.image.fontsize + '&ts=' + Date.now();
  }
}
