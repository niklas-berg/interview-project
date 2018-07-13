import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ProjectService } from '../../domain/project.service';


import { Observable } from 'rxjs';
import { Project } from 'src/app/domain/project.model';

@Component({
  selector: 'wec-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent implements OnInit {
	//projects: Project[];
	projects$: Observable<Project[]>;
  // TODO hämta projekten från services så att vyn kan visa dem

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
		//this.projectService.getProjects().subscribe(projects => this.projects = projects);
		//this.projectService.getProjects().subscribe(projects => console.log('Dashboard received: ', projects));
		this.projects$ = this.projectService.getProjects();

	 }

}
