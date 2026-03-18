import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonButton } from '@ionic/angular/standalone';
import { FooterComponent } from '../components/footer/footer.component';
import { addIcons } from 'ionicons';
import { analyticsOutline, codeSlashOutline, headsetOutline, layersOutline } from 'ionicons/icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
  imports: [RouterLink, FooterComponent, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonButton],
})
export class ServicesPage {
  constructor() {
    addIcons({ codeSlashOutline, layersOutline, analyticsOutline, headsetOutline });
  }
}