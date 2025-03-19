
import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  standalone: false,
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})

export class ContactusComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    console.log('Form Submitted:', this.contactForm);
    alert('Your message has been sent successfully!');
    this.contactForm = { name: '', email: '', message: '' };
  }
}