import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
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
export class AboutPage implements OnInit {
  constructor(private title: Title, private meta: Meta) {
    addIcons({ speedometerOutline, shieldCheckmarkOutline, phonePortraitOutline });
  }

  ngOnInit() {
    this.title.setTitle('About Us | FTECH Solutions');
    this.meta.updateTag({ name: 'description', content: 'Learn about FTECH Solutions — our mission, values, and the team driving your digital transformation journey.' });
  }
}