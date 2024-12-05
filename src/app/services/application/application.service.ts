import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from '../../models/application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private queryServiceURL = 'http://localhost:8080/api/applications';
  private commandServiceURL = 'http://localhost:8081/api/applications';

  constructor(private http: HttpClient) {}

  getApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.queryServiceURL);
  }

  getApplicationById(id: string): Observable<Application> {
    return this.http.get<Application>(`${this.queryServiceURL}/${id}`);
  }

  addApplication(application: Application): Observable<Application> {
    return this.http.post<Application>(this.commandServiceURL, application);
  }

  deleteApplication(id: string): Observable<void> {
    return this.http.delete<void>(`${this.commandServiceURL}/${id}`);
  }
}
