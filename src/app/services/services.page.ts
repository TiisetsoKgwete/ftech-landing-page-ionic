import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
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
export class ServicesPage implements OnInit {
  constructor(private title: Title, private meta: Meta) {
    addIcons({ codeSlashOutline, layersOutline, analyticsOutline, headsetOutline });
  }

  ngOnInit() {
    this.title.setTitle('Our Services | FTECH Solutions');
    this.meta.updateTag({ name: 'description', content: 'Explore FTECH\'s full suite of technology services: web development, business solutions, IT consulting, and dedicated 24/7 support.' });
  }
}