import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonMenuButton, IonIcon, IonRow, IonCol } from '@ionic/angular/standalone';
import { FooterComponent } from '../components/footer/footer.component';
import { addIcons } from 'ionicons';
import { flashOutline, shieldCheckmarkOutline, peopleOutline, checkmarkDoneCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [CommonModule, RouterLink, RouterLinkActive, FooterComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonMenuButton, IonIcon, IonRow, IonCol],
})
export class HomePage {
  showStats = false;
  showFeatures = false;

  constructor() {
    addIcons({ flashOutline, shieldCheckmarkOutline, peopleOutline, checkmarkDoneCircleOutline });
  }

  toggleStats() {
    this.showStats = !this.showStats;
  }

  toggleFeatures() {
    this.showFeatures = !this.showFeatures;
  }
}