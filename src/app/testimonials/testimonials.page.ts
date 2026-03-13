import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonCard, IonCardContent, IonIcon, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';
import { addIcons } from 'ionicons';
import { starOutline } from 'ionicons/icons';

interface Testimonial {
  name: string;
  company: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.page.html',
  styleUrls: ['./testimonials.page.scss'],
  imports: [CommonModule, RouterLink, FooterComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonCard, IonCardContent, IonIcon, IonButton],
})
export class TestimonialsPage {
  testimonials: Testimonial[] = [
    {
      name: 'John Smith',
      company: 'Tech Innovations Inc.',
      role: 'CEO',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
      text: 'FTECH Solutions transformed our entire digital infrastructure. Their expertise and dedication made all the difference!',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      company: 'Global Marketing Co.',
      role: 'Marketing Director',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      text: 'Outstanding service and support. The team went above and beyond to ensure our project was a success.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'Finance Solutions Ltd.',
      role: 'CTO',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      text: 'Reliable, professional, and results-driven. FTECH is our trusted technology partner.',
      rating: 5,
    },
    {
      name: 'Emma Davis',
      company: 'Creative Agency Plus',
      role: 'Project Manager',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
      text: 'Fast implementation, excellent communication, and top-notch support. Highly recommended!',
      rating: 5,
    },
  ];

  constructor() {
    addIcons({ starOutline });
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}