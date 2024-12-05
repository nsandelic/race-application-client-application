import { Component, OnInit } from '@angular/core';
import { RaceService } from '../../../services/race/race.service';
import { Race } from '../../../models/race';

@Component({
  selector: 'app-admin-race-management',
  standalone: false,
  templateUrl: './admin-race-management.component.html',
  styleUrl: './admin-race-management.component.css'
})
export class AdminRaceManagementComponent implements OnInit {
  races: Race[] = [];
  newRace: Partial<Race> = { name: '', distance: 'TEN_KM' };
  selectedRace: Race | null = null;

  constructor(private raceService: RaceService) {}

  ngOnInit(): void {
    this.raceService.getRaces().subscribe((data) => {
      this.races = data;
    });
  }

  addRace(): void {
    this.raceService.addRace(this.newRace as Race).subscribe((race) => {
      this.races.push(race);
    });
  }

  deleteRace(id: string): void {
    this.raceService.deleteRace(id).subscribe(() => {
      this.races = this.races.filter((race) => race.id !== id);
    });
  }

  selectRaceForUpdate(race: Race): void {
    this.selectedRace = { ...race };
  }

  updateRace(): void {
    if (this.selectedRace) {
      this.raceService.updateRace(this.selectedRace.id, this.selectedRace).subscribe((updatedRace) => {
        const index = this.races.findIndex((race) => race.id === updatedRace.id);
        if (index !== -1) {
          this.races[index] = updatedRace;
        }
        this.selectedRace = null;
      });
    }
  }

}
