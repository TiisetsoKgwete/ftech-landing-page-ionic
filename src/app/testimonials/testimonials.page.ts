import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { IonContent, IonCard, IonCardContent, IonIcon, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';
import { addIcons } from 'ionicons';
import { star } from 'ionicons/icons';

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
  imports: [CommonModule, RouterLink, FooterComponent, IonContent, IonCard, IonCardContent, IonIcon, IonButton],
})
export class TestimonialsPage implements OnInit {
  testimonials: Testimonial[] = [
    {
      name: 'Sipho Ndlovu',
      company: 'Apex Trade Solutions',
      role: 'Managing Director',
      image: 'https://api.dicebear.com/7.x/initials/svg?seed=SN&backgroundColor=0a3d91',
      text: 'FTECH modernised our entire operations pipeline in under three months. The improvement in efficiency was immediate and measurable — our team now spends time on growth instead of manual processes.',
      rating: 5,
    },
    {
      name: 'Zanele Mokoena',
      company: 'Meridian Financial Group',
      role: 'IT Director',
      image: 'https://api.dicebear.com/7.x/initials/svg?seed=ZM&backgroundColor=1a6b3c',
      text: 'The level of professionalism and technical depth FTECH brought to our cloud migration was exceptional. They kept us informed at every stage and delivered ahead of schedule.',
      rating: 5,
    },
    {
      name: 'Keegan van der Merwe',
      company: 'Logistix Africa',
      role: 'Chief Technology Officer',
      image: 'https://api.dicebear.com/7.x/initials/svg?seed=KV&backgroundColor=5a2d91',
      text: 'Reliable, security-conscious, and results-driven. FTECH built our logistics platform from the ground up and continues to support us as a true long-term partner.',
      rating: 5,
    },
    {
      name: 'Priya Pillay',
      company: 'Centurion Retail Holdings',
      role: 'Head of Technology',
      image: 'https://api.dicebear.com/7.x/initials/svg?seed=PP&backgroundColor=914a1a',
      text: 'Solid communication and a structured delivery process. FTECH integrated seamlessly with our internal team and the final product exceeded our expectations.',
      rating: 4,
    },
  ];

  constructor(private title: Title, private meta: Meta) {
    addIcons({ star });
  }

  ngOnInit() {
    this.title.setTitle('Client Testimonials | FTECH Solutions');
    this.meta.updateTag({ name: 'description', content: 'Read what our clients say about FTECH Solutions\u2019 work, delivery, and ongoing technology partnerships.' });
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}