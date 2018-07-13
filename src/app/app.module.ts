import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomainModule } from './domain';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

import { NgxMultiLineEllipsisModule } from 'ngx-multi-line-ellipsis';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent
  ],
  imports: [
    BrowserModule,
    DomainModule,
    AppRoutingModule,
		NgxMultiLineEllipsisModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
