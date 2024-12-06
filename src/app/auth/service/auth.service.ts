import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginCred } from '../../models/login-cred';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8081/auth/login';

  constructor(private http: HttpClient) {}

  login(loginCred : LoginCred): Observable<LoginCred> {
    return this.http.post<LoginCred>(this.loginUrl, loginCred);
  }

  saveToken(token: string): void {
    if (typeof localStorage !== 'undefined')
      localStorage.setItem('token', token);
    else
      console.log("Undefined storage");
  }

  getToken(): string | null {
    if (typeof localStorage !== 'undefined')
      return localStorage.getItem('token');
    else{
      console.log("Undefined storage");
      return null
    }
  }

  saveUserRole(role: string): void {
    if (typeof localStorage !== 'undefined')
      localStorage.setItem('role', role);
    else
      console.log("Undefined storage");
  }

  getUserRole(): string | null {
    if (typeof localStorage !== 'undefined')
      return localStorage.getItem('role');
    else{
      console.log("Undefined storage");
      return null
    }

  }

  logout(): void {
    if (typeof localStorage !== 'undefined')
      localStorage.removeItem('token');
      localStorage.removeItem('role');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
