import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ProjectService } from '../../domain/project.service';

<<<<<<< HEAD

import { Observable } from 'rxjs';
import { Project } from 'src/app/domain/project.model';

=======
>>>>>>> bf2cea330e714da298c383922a7d310d23351b71
@Component({
  selector: 'wec-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent implements OnInit {
<<<<<<< HEAD
	//projects: Project[];
	projects$: Observable<Project[]>;
=======

>>>>>>> bf2cea330e714da298c383922a7d310d23351b71
  // TODO hämta projekten från services så att vyn kan visa dem

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
<<<<<<< HEAD
		//this.projectService.getProjects().subscribe(projects => this.projects = projects);
		//this.projectService.getProjects().subscribe(projects => console.log('Dashboard received: ', projects));
		this.projects$ = this.projectService.getProjects();

	 }
=======
  }
>>>>>>> bf2cea330e714da298c383922a7d310d23351b71

}
