import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-terms-of-service',
  templateUrl: './terms-of-service.page.html',
  styleUrls: ['./terms-of-service.page.scss'],
  imports: [RouterLink, IonContent, IonButton, FooterComponent],
})
export class TermsOfServicePage implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Terms of Service | FTECH Solutions');
    this.meta.updateTag({ name: 'description', content: 'Read the terms governing your use of FTECH Solutions services and website.' });
  }
}
