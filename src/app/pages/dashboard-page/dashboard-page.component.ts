import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ProjectService } from '../../domain/project.service';

@Component({
  selector: 'wec-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent implements OnInit {

  // TODO hämta projekten från services så att vyn kan visa dem

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

}
