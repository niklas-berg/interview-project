import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'project', loadChildren: './project#ProjectModule' }
<<<<<<< HEAD
 // { path: 'project', loadChildren: './project:ProjectModule' }
=======
>>>>>>> bf2cea330e714da298c383922a7d310d23351b71
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<<<<<<< HEAD

=======
>>>>>>> bf2cea330e714da298c383922a7d310d23351b71
