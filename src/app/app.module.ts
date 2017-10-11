import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero/hero.service'; 
import { UserService } from './userDetails/user.service'
import { AppRoutingModule } from './app-routing.module'; 
import { OnlinequeComponent }  from './onlinetest/onlineque.component';
import { UserdetailsComponent } from './userDetails/userdetails.component'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailComponent,
    DashboardComponent,
    OnlinequeComponent,
    UserdetailsComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    HeroService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
