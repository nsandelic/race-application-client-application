import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { LoginCred } from '../../models/login-cred';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router ) {}

  apply() { 
    if (this.email && this.password) {

      this.authService.login({username: this.email, password: this.password} as LoginCred).subscribe(
        (response:any) => {
        console.log(response.token)
        this.authService.saveToken(response.token);
        this.authService.saveUserRole(response.role);
        this.router.navigate(['/races']);
      },
      (error) => {
        this.errorMessage = 'Invalid credentials. Please try again.';
      });
    }
  }
}


