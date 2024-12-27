import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './authentication/components/footer/footer.component'; // Correct path
import { HeaderComponent } from './authentication/components/header/header.component'; // Correct path
import { MainContentComponent } from './authentication/components/main-content/main-content.component'; // Correct path for MainContentComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, FooterComponent, HeaderComponent, MainContentComponent], // Add MainContentComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
}
