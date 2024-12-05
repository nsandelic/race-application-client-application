import { Component, OnInit } from '@angular/core';
import { RaceService } from '../../services/race/race.service';
import { Race } from '../../models/race';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'app-races',
  standalone: false,
  templateUrl: './races.component.html',
  styleUrl: './races.component.css'
})
export class RacesComponent implements OnInit{
  races: Race[] = [];

  constructor(private raceService: RaceService, public authService: AuthService) {}

  ngOnInit(): void {
    this.raceService.getRaces().subscribe((data) => {
      this.races = data;
    });
  }

}
