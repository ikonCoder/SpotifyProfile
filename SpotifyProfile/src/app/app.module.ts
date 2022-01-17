import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/nav/nav.component';
import { HeaderProfileMenuComponent } from './components/nav/nav_profileMenu/nav-profile-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResultsComponent } from './components/results/results.component';


@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderProfileMenuComponent,
    DashboardComponent,
    HomeComponent,
    FooterComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
