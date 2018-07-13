import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

<<<<<<< HEAD
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectService } from 'src/app/domain/project.service';
import { Project } from 'src/app/domain/project.model';
import { ActivatedRoute, Params } from '@angular/router';

=======
>>>>>>> bf2cea330e714da298c383922a7d310d23351b71
@Component({
  selector: 'wec-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPageComponent implements OnInit {

  // TODO hämta projektet via route :id
<<<<<<< HEAD
	project$: Observable<Project>;
	id: string;


  constructor(
		private route: ActivatedRoute,
		private projectService: ProjectService
	) { }

  ngOnInit() {
		this.getProject();
  }

	private getProject() {
		//const id = +this.route.paramMap.get('id');
		this.route.params.forEach((params: Params) => {
			if(params['id'] !== undefined) {
				let id = params['id'];
				this.id = id;
			}
		});
		this.project$ = this.projectService.getProjectById(this.id);
		//this.project$.subscribe(val => console.log(val[0]));
		//console.log("projectu: ", this.project$);
	}

=======

  constructor() { }

  ngOnInit() {
  }

>>>>>>> bf2cea330e714da298c383922a7d310d23351b71
}
