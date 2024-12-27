import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';  // Import routes

bootstrapApplication(AppComponent, {
  providers: [
    { provide: 'APP_ROUTES', useValue: routes },  // Use routes here
  ]
}).catch((err) => console.error(err));
