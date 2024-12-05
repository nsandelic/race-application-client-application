import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Race } from '../../models/race';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  private queryServiceURL = 'http://localhost:8080/api/races';
  private commandServiceURL = 'http://localhost:8081/api/races';

  constructor(private http: HttpClient) {}

  getRaces(): Observable<Race[]> {
    return this.http.get<Race[]>(this.queryServiceURL);
  }

  getRaceById(id: string): Observable<Race> {
    return this.http.get<Race>(`${this.queryServiceURL}/${id}`);
  }

  addRace(race: Race): Observable<Race> {
    return this.http.post<Race>(this.commandServiceURL, race);
  }

  updateRace(id: string, race: Race): Observable<Race> {
    return this.http.put<Race>(`${this.commandServiceURL}/${id}`, race);
  }

  deleteRace(id: string): Observable<void> {
    return this.http.delete<void>(`${this.commandServiceURL}/${id}`);
  }
}
