import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule if needed

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [FormsModule], // Include FormsModule if you're using ngModel
})
export class DashboardComponent {
  // Add the password property to the user object
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    password: '' // Define the password property
  };

  // Define the login method
  login() {
    console.log('Login method called');
    console.log(this.user); // You can check the user object here
    // Add your login logic here
  }
}
