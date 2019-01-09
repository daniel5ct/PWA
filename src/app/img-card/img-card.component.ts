import { Component, OnInit } from '@angular/core';
import { CatImage } from '../Models/CatImage';
import { Button } from '../Models/Button';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.less']
})
export class ImgCardComponent implements OnInit {
  private image: CatImage = {
    message: 'Cat',
    api: 'https://cataas.com/cat/says/',
    fontsize: 40
  };

  public src: string;
  public button: Button = {
    text: 'Give me another cat',
    color: 'primary',
    disabled: false
  };

  ngOnInit() {
   this.generateSrc();
  }

  public generateSrc(): void {
    this.src = this.image.api + this.image.message + '?size=' + this.image.fontsize;
    if (!navigator.onLine) {
      this.button.text = 'Sorry, you\'re offline';
      this.button.disabled = true;
    }
  }
}
