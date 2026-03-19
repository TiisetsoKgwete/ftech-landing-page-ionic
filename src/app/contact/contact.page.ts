import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { IonContent, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonText, IonSpinner } from '@ionic/angular/standalone';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  imports: [CommonModule, ReactiveFormsModule, FooterComponent, IonContent, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonText, IonSpinner],
})
export class ContactPage implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  isSubmitted = false;

  constructor(private fb: FormBuilder, private title: Title, private meta: Meta) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit() {
    this.title.setTitle('Contact Us | FTECH Solutions');
    this.meta.updateTag({ name: 'description', content: 'Get in touch with the FTECH Solutions team. We\u2019re ready to help you plan and execute your next technology project.' });
  }

  onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      setTimeout(() => {
        this.isSubmitting = false;
        this.isSubmitted = true;
        this.contactForm.reset();
      }, 1500);
    }
  }
}