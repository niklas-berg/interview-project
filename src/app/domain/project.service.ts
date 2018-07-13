import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project.model';
import { of, Observable } from 'rxjs';

<<<<<<< HEAD
import { catchError, map, filter, tap } from 'rxjs/operators';

import {
  AsyncCache,
  LocalStorageDriver,
  MemoryDriver,
  AsyncCacheModule,
  AsyncCacheOptions,
  CachedHttp
} from 'angular-async-cache';


=======
>>>>>>> bf2cea330e714da298c383922a7d310d23351b71
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  // apiet levererar en lista med våra ar projekt
  // genom webpack dev servers proxy så får vi in dem på samma host och slipper på så sätt cross origin problem
  // start appen och titta här för att se feeded: http://localhost:4200/app-api/v2/projects
  apiUrl = '/app-api/v2/projects';
<<<<<<< HEAD
	cache$: Observable<Project[]>;
  constructor(
		private http: HttpClient,
	) {}

  getProjects(): Observable<Project[]> {
		/* Pipe:
 			*	map -- kolla på elementen av vår Observable
 			*	filter -- JSON-respondet behöver inte nödvändigtvis ha samma struktur som Project-interfacet; därav nyckelordet any
 		**/
		return this.http.get<Project[]>(this.apiUrl).pipe(
			map(projects => projects.filter((proj: any) => proj['visible'] == true))
		);
	}
=======

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    // TODO implementera hämtning av projekten
    // TODO filtrera ut project som är visible: false
    return of([]);
  }
>>>>>>> bf2cea330e714da298c383922a7d310d23351b71

  getProjectById(projectId: string): Observable<Project> {
    // TODO hämta ett visst projekt, det finns inget apianrop för det,
    // utan bör implementeras genom att cacha getProjects och filtrera ut specifikt projekt via id
<<<<<<< HEAD
//    return this.http.get<Project>(this.apiUrl).pipe(
//			filter((proj: any) => proj['id'] == projectId),
//		);
		return this.http.get<Project>(this.apiUrl).pipe(
			map(projects => projects.filter((proj: any) => proj['id'] == projectId))
		);
  }
=======
    return of(null);
  }

>>>>>>> bf2cea330e714da298c383922a7d310d23351b71
}
