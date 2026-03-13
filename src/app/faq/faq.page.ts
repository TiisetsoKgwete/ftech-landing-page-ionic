import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonCard, IonCardContent, IonIcon, IonButton } from '@ionic/angular/standalone';
import { FooterComponent } from '../components/footer/footer.component';
import { addIcons } from 'ionicons';
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons';

interface FAQItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
  imports: [CommonModule, RouterLink, FooterComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonCard, IonCardContent, IonIcon, IonButton],
})
export class FAQPage {
  faqs: FAQItem[] = [
    {
      question: 'What services does FTECH offer?',
      answer:
        'We offer comprehensive technology solutions including web development, business solutions, consulting services, and 24/7 support. Our team works with businesses of all sizes to deliver custom solutions tailored to your needs.',
      open: false,
    },
    {
      question: 'How quickly can you deliver a project?',
      answer:
        'Project timelines vary depending on complexity and scope. For simple projects, we can deliver in 2-4 weeks. More complex solutions typically take 6-12 weeks. We provide detailed timelines during the initial consultation.',
      open: false,
    },
    {
      question: 'Do you provide ongoing support after deployment?',
      answer:
        'Absolutely! We offer comprehensive maintenance and support packages. Our team provides bug fixes, updates, feature enhancements, and troubleshooting via our 24/7 support channels.',
      open: false,
    },
    {
      question: 'What is your pricing model?',
      answer:
        'We offer flexible pricing options including fixed-price projects, hourly rates, and monthly retainers. Each solution is customized based on your specific requirements. Contact us for a detailed quote.',
      open: false,
    },
    {
      question: 'Are you available for remote teams?',
      answer:
        'Yes! We have extensive experience working with remote and distributed teams. We use modern collaboration tools and maintain clear communication throughout all projects.',
      open: false,
    },
    {
      question: 'What technologies do you specialize in?',
      answer:
        'We work with modern frameworks like Angular, React, Node.js, Python, and more. Our team stays updated with the latest technologies to ensure optimal solutions for your business.',
      open: false,
    },
  ];

  constructor() {
    addIcons({ chevronDownOutline, chevronUpOutline });
  }

  toggleFAQ(item: FAQItem) {
    item.open = !item.open;
  }
}