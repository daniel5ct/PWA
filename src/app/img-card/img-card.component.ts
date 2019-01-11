import { Component, OnInit } from '@angular/core';
import { WebRequestJsonService } from '../../services/WebRequestJsonService';
import { CatImage } from '../Models/CatImage';
import { Button } from '../Models/Button';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.less']
})
export class ImgCardComponent implements OnInit {

  private readonly dataURL: string = 'data.json';

  private webRequestJsonService: WebRequestJsonService;

  private image: CatImage = {
    message: 'Cat',
    api: 'https://cataas.com/cat/says/',
    fontsize: 40
  };

  public featureToggleData: any;
  public src: string;
  public button: Button = {
    text: 'Give me another cat',
    color: 'primary',
    disabled: false
  };

  public constructor(webRequestJsonService: WebRequestJsonService) {
    this.webRequestJsonService = webRequestJsonService;
  }

  public ngOnInit() {
    this.GetFeatureToggleDataFromJson(this.dataURL);
    this.src = this.image.api + this.image.message + '?size=' + this.image.fontsize;
  }

  public generateSrc(): void {
    if (!navigator.onLine) {
      this.button.text = 'Sorry, you\'re offline';
      this.button.disabled = true;
    } else {
      this.src += '&ts=' + Date.now();
    }
  }

  private GetFeatureToggleDataFromJson(dataURL: string): any {
    this.webRequestJsonService.RequestJSON<any>(dataURL)
      .then((result: any) => {
        this.featureToggleData = result;
      })
      .catch((reason: any) => {
          console.log('Error while fetching data.');
      });
  }
}
