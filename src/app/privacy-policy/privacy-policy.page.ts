import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
  imports: [RouterLink, IonContent, IonButton, FooterComponent],
})
export class PrivacyPolicyPage implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Privacy Policy | FTECH Solutions');
    this.meta.updateTag({ name: 'description', content: 'Read the FTECH Solutions privacy policy and how we protect your data.' });
  }
}
