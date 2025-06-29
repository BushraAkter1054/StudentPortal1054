
import { Routes } from '@angular/router';
import { AuthPageComponent } from './auth/auth-page/auth-page.component';
import { UserDetailsComponent } from './user-details/user-details.component';


export const routes: Routes = [
  { path: '', component: AuthPageComponent },
  { path: 'user/:id', component: UserDetailsComponent }
];
