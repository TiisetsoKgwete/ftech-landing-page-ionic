import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonText, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  imports: [CommonModule, ReactiveFormsModule, FooterComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonText, IonButtons, IonMenuButton],
})
export class ContactPage {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Handle form submission
    }
  }
}