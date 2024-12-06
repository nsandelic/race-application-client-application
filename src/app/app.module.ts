import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminRaceManagementComponent } from './components/admin/admin-race-management/admin-race-management.component';
import { ApplicantApplicationsComponent } from './components/applicant/applicant-applications/applicant-applications.component';
import { ApplyRaceComponent } from './components/applicant/apply-race/apply-race.component';
import { RacesComponent } from './components/races/races.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { jwtInterceptor } from './auth/interceptor/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    AdminRaceManagementComponent,
    ApplicantApplicationsComponent,
    ApplyRaceComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
     provideHttpClient(withFetch(), withInterceptors([jwtInterceptor])),
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
