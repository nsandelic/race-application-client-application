import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRaceManagementComponent } from './components/admin/admin-race-management/admin-race-management.component';
import { ApplicantApplicationsComponent } from './components/applicant/applicant-applications/applicant-applications.component';
import { ApplyRaceComponent } from './components/applicant/apply-race/apply-race.component';
import { RacesComponent } from './components/races/races.component';

const routes: Routes = [
  { path: '', redirectTo: 'races', pathMatch: 'full' },
 // { path: 'login', component: LoginComponent },
  {
    path: 'races',
    component: RacesComponent,
  },
  {
    path: 'apply/:raceId',
    component: ApplyRaceComponent,
    //canActivate: [AuthGuard],
  },
  {
    path: 'applications',
    component: ApplicantApplicationsComponent,
    //canActivate: [AuthGuard],
  },
  {
    path: 'admin/race-management',
    component: AdminRaceManagementComponent,
    //canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'races' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
