import { Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@Component({
  standalone: true,
  selector: 'app-auth-page',
  imports: [RegisterComponent, LoginComponent],
  templateUrl: './auth-page.component.html'
})
export class AuthPageComponent {}
