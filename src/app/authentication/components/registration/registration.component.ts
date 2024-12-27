import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  standalone: true, // Standalone component
  imports: [FormsModule], // Import FormsModule
})
export class RegistrationComponent {
  user = {
    name: '',
    email: '',
    password: '',
    role: ''
  };

  register() {
    console.log('User Registered:', this.user);
  }
}
