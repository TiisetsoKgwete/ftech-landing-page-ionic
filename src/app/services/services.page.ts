import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
  imports: [FooterComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonMenuButton],
})
export class ServicesPage {
  constructor() {}
}