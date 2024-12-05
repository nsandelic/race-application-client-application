import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth'; // Adjust based on API endpoint

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.baseUrl}/login`, credentials);
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
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
