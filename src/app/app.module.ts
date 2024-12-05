import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminRaceManagementComponent } from './components/admin/admin-race-management/admin-race-management.component';
import { ApplicantApplicationsComponent } from './components/applicant/applicant-applications/applicant-applications.component';
import { ApplyRaceComponent } from './components/applicant/apply-race/apply-race.component';
import { RacesComponent } from './components/races/races.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    AdminRaceManagementComponent,
    ApplicantApplicationsComponent,
    ApplyRaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
