import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const userRole = this.authService.getUserRole();
    const isAdminRoute = route.routeConfig?.path?.startsWith('admin');
    
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }

    if (isAdminRoute && userRole !== 'Administrator') {
      this.router.navigate(['/races']);
      return false;
    }

    return true;
  }
}
