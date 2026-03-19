import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
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
export class HomePage implements OnInit, OnDestroy {
  happyClients = 0;
  yearsExperience = 0;
  successRate = 0;
  private statTimers: ReturnType<typeof setInterval>[] = [];

  constructor(private title: Title, private meta: Meta) {
    addIcons({ flashOutline, shieldCheckmarkOutline, peopleOutline, checkmarkDoneCircleOutline });
  }

  ngOnInit() {
    this.title.setTitle('FTECH Solutions | Digital Transformation & Cloud Services');
    this.meta.updateTag({ name: 'description', content: 'FTECH Solutions delivers enterprise-grade web development, cloud solutions, and digital transformation services for growing businesses in South Africa.' });
    this.animateStats();
  }

  ngOnDestroy() {
    this.statTimers.forEach((timer) => clearInterval(timer));
    this.statTimers = [];
  }

  private animateStats() {
    this.animateValue(500, (value) => {
      this.happyClients = value;
    });
    this.animateValue(10, (value) => {
      this.yearsExperience = value;
    }, 900);
    this.animateValue(99, (value) => {
      this.successRate = value;
    });
  }

  private animateValue(target: number, apply: (value: number) => void, duration = 1200) {
    const frameMs = 24;
    const steps = Math.max(1, Math.floor(duration / frameMs));
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      const rounded = Math.min(target, Math.round(current));
      apply(rounded);

      if (rounded >= target) {
        clearInterval(timer);
      }
    }, frameMs);

    this.statTimers.push(timer);
  }
}