import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { FooterComponent } from '../components/footer/footer.component';
import { addIcons } from 'ionicons';
import { speedometerOutline, shieldCheckmarkOutline, phonePortraitOutline } from 'ionicons/icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  imports: [FooterComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonButtons, IonMenuButton],
})
export class AboutPage {
  constructor() {
    addIcons({ speedometerOutline, shieldCheckmarkOutline, phonePortraitOutline });
  }
}