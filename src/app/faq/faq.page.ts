import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { IonContent, IonCard, IonCardContent, IonIcon, IonButton } from '@ionic/angular/standalone';
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
  imports: [CommonModule, RouterLink, FooterComponent, IonContent, IonCard, IonCardContent, IonIcon, IonButton],
})
export class FAQPage implements OnInit {
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
    {
      question: 'What industries do you serve?',
      answer:
        'We work across retail, financial services, logistics, healthcare, professional services, and the public sector. Our solutions are flexible and adapt to the specific compliance, scale, and operational requirements of each industry.',
      open: false,
    },
    {
      question: 'How does the onboarding process work?',
      answer:
        'We start with a no-obligation discovery call to understand your goals and constraints. From there we produce a scoped proposal with a clear timeline and cost breakdown. Once approved, a dedicated project lead is assigned and we kick off with a structured planning sprint before any development begins.',
      open: false,
    },
    {
      question: 'Do you offer cloud hosting and infrastructure services?',
      answer:
        'Yes. We design, deploy, and manage cloud infrastructure on AWS, Azure, and Google Cloud. This includes environment setup, cost optimisation, uptime monitoring, automated backups, and ongoing maintenance as part of our managed services offering.',
      open: false,
    },
    {
      question: 'How do you handle data security and compliance?',
      answer:
        'Security is built into every phase of our delivery — not added afterwards. We follow practices aligned with ISO 27001 and South Africa\'s POPIA requirements, including encrypted data storage, secure API design, role-based access control, and regular vulnerability assessments.',
      open: false,
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer:
        'Absolutely. Integration is one of our core strengths. We connect new solutions to existing ERP, CRM, database, and third-party platforms with minimal disruption to your daily operations. We document all integration points thoroughly for your internal team.',
      open: false,
    },
  ];

  constructor(private title: Title, private meta: Meta) {
    addIcons({ chevronDownOutline, chevronUpOutline });
  }

  ngOnInit() {
    this.title.setTitle('FAQ | FTECH Solutions');
    this.meta.updateTag({ name: 'description', content: 'Find answers to frequently asked questions about FTECH Solutions\u2019 services, pricing, timelines, security, and onboarding process.' });
  }

  toggleFAQ(item: FAQItem) {
    item.open = !item.open;
  }
}