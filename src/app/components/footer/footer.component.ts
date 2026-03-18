import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonFooter, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoFacebook, logoTwitter, logoLinkedin, logoInstagram } from 'ionicons/icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [IonFooter, IonIcon, RouterLink],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  constructor() {
    addIcons({ logoFacebook, logoTwitter, logoLinkedin, logoInstagram });
  }
}