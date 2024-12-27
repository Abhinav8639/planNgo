import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { RegistrationComponent } from './authentication/components/registration/registration.component';
import { DashboardComponent } from './authentication/components/dashboard/dashboard.component';

// Import the routes
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route redirects to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use the routes for the entire app
  exports: [RouterModule] // Export RouterModule so that the routing works across the app
})
export class AppRoutingModule { }
