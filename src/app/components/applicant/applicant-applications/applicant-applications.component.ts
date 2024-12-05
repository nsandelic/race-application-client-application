import { Component, OnInit } from '@angular/core';
import { Application } from '../../../models/application';
import { ApplicationService } from '../../../services/application/application.service';

@Component({
  selector: 'app-applicant-applications',
  standalone: false,
  templateUrl: './applicant-applications.component.html',
  styleUrl: './applicant-applications.component.css'
})
export class ApplicantApplicationsComponent implements OnInit {
  applications: Application[] = [];

  constructor(private applicationService: ApplicationService) {}

  ngOnInit(): void {
    this.applicationService.getApplications().subscribe((data) => {
      this.applications = data;
    });
  }

  deleteApplication(id: string): void {
    this.applicationService.deleteApplication(id).subscribe(() => {
      this.applications = this.applications.filter((app) => app.id !== id);
    });
  }

  

}
