import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPageComponent } from './project-page/project-page.component';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD

=======
>>>>>>> bf2cea330e714da298c383922a7d310d23351b71
export const routes: Routes = [
  { path: ':id', component: ProjectPageComponent }
];

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild(routes),
  ],
  declarations: [
     ProjectPageComponent
  ]
})
export class ProjectModule { }
