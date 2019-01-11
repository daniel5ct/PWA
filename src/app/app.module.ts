import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatToolbarModule, MatCardModule, MatButtonModule  } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgCardComponent } from './img-card/img-card.component';
import { FeatureToggleModule } from 'ngx-feature-toggle';
import { WebRequestJsonService } from '../services/WebRequestJsonService';

@NgModule({
  declarations: [
    AppComponent,
    ImgCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [],
    FeatureToggleModule
  ],
  providers: [
    { provide: WebRequestJsonService, useClass: WebRequestJsonService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
