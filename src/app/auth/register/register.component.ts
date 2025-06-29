import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  department = '';
  gender = '';
  acceptedTerms = false;
  
  constructor(
    private authService: AuthService,
    private router: Router   
  ) {}

  submit() {
    const payload = {
      name: this.name,
      email: this.email,
      password: this.password,
      department: this.department,
      gender: this.gender
    };

    this.authService.registerUser(payload).subscribe({
      next: (res) => {
        const newUserId = res.id; 
        console.log("Registered with ID:", newUserId);
        // console.log('Registration Success:', res);
        alert('✅ Registered successfully!');
        //this.router.navigate(['/user/:id']); 
        this.router.navigate(['/user', res.id]);
      },
      error: (err) => {
        console.error('❌ Registration failed:', err);
        alert('Something went wrong!');
      }
    });
  }
}
