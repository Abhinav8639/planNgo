import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule]
})
export class HeaderComponent {
  isLoggedIn: boolean = false; // Define the 'isLoggedIn' property

  // You can also toggle this based on your logic later
  loginStatus() {
    this.isLoggedIn = !this.isLoggedIn; // Toggle the login status
  }
}
