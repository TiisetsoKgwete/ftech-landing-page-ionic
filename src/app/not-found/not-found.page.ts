import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
  imports: [RouterLink, IonContent, IonButton],
})
export class NotFoundPage implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Page Not Found | FTECH Solutions');
    this.meta.updateTag({ name: 'description', content: 'The page you are looking for does not exist.' });
  }
}
