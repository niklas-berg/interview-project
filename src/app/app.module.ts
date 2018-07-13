import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomainModule } from './domain';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

<<<<<<< HEAD
import { NgxMultiLineEllipsisModule } from 'ngx-multi-line-ellipsis';

=======
>>>>>>> bf2cea330e714da298c383922a7d310d23351b71
@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent
  ],
  imports: [
    BrowserModule,
    DomainModule,
<<<<<<< HEAD
    AppRoutingModule,
		NgxMultiLineEllipsisModule
=======
    AppRoutingModule
>>>>>>> bf2cea330e714da298c383922a7d310d23351b71
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
