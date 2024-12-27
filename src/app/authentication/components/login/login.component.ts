import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // For ngModel

@Component({
  selector: 'app-login',
  standalone: true,  // Marks the component as standalone
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule],  // Import FormsModule for ngModel to work
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  login() {
    console.log(this.user);
  }
}
