import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton, IonIcon, IonRow, IonCol } from '@ionic/angular/standalone';
import { FooterComponent } from '../components/footer/footer.component';
import { addIcons } from 'ionicons';
import { flashOutline, shieldCheckmarkOutline, peopleOutline, checkmarkDoneCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [CommonModule, RouterLink, FooterComponent, IonContent, IonButton, IonIcon, IonRow, IonCol],
})
export class HomePage {
  constructor() {
    addIcons({ flashOutline, shieldCheckmarkOutline, peopleOutline, checkmarkDoneCircleOutline });
  }
}