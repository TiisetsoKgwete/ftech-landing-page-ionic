import { Component } from '@angular/core';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon } from '@ionic/angular/standalone';
import { FooterComponent } from '../components/footer/footer.component';
import { addIcons } from 'ionicons';
import { speedometerOutline, shieldCheckmarkOutline, phonePortraitOutline } from 'ionicons/icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  imports: [FooterComponent, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon],
})
export class AboutPage {
  constructor() {
    addIcons({ speedometerOutline, shieldCheckmarkOutline, phonePortraitOutline });
  }
}