import { Component } from '@angular/core';
import { AuthService } from './auth/service/auth.service';
import { WebSocketService } from './services/websocket/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public authService: AuthService, private websocketService: WebSocketService, private router: Router) {}

  ngOnInit(): void {
    this.websocketService.connectCommand();
    this.websocketService.connectQuery();
  }

  logout(): void {
    this.websocketService.disconnectQuery();
    this.websocketService.disconnectCommand();
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
