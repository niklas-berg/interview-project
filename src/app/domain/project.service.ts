import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project.model';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  // apiet levererar en lista med våra ar projekt
  // genom webpack dev servers proxy så får vi in dem på samma host och slipper på så sätt cross origin problem
  // start appen och titta här för att se feeded: http://localhost:4200/app-api/v2/projects
  apiUrl = '/app-api/v2/projects';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    // TODO implementera hämtning av projekten
    // TODO filtrera ut project som är visible: false
    return of([]);
  }

  getProjectById(projectId: string): Observable<Project> {
    // TODO hämta ett visst projekt, det finns inget apianrop för det,
    // utan bör implementeras genom att cacha getProjects och filtrera ut specifikt projekt via id
    return of(null);
  }

}
