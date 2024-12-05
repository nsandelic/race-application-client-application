import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from '../../../services/application/application.service';

@Component({
  selector: 'app-apply-race',
  standalone: false,
  templateUrl: './apply-race.component.html',
  styleUrl: './apply-race.component.css'
})
export class ApplyRaceComponent {
  application = {firstName: '', lastName: '', club: '', raceId: '' };

  constructor(
    private applicationService: ApplicationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.application.raceId = params['raceId'];
    });
  }

  apply(): void {
    this.applicationService.addApplication(this.application).subscribe(() => {
      alert('Application submitted successfully!');
      this.router.navigate(['/applications']);
    });
  }
}
