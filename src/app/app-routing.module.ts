import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroComponent }      from './hero/hero.component';
import { LoginComponent }      from './login/login.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { OnlinequeComponent }  from './onlinetest/onlineque.component';
import { UserdetailsComponent } from './userDetails/userdetails.component';
import { HomeComponent } from './home/home.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'application',  component: AppComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'home',  
    component: HomeComponent,
    children: [
      { path: 'dashboard',     component: DashboardComponent },
      { path: 'detail/:id', component: HeroDetailComponent },
      { path: 'heroes',     component: HeroComponent },
      { path: 'questions',     component: OnlinequeComponent },
      { path: 'users',     component: UserdetailsComponent }
    ]
  },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroComponent },
  { path: 'questions',     component: OnlinequeComponent },
  { path: 'users',     component: UserdetailsComponent }
];

@NgModule({
  providers: [{provide: APP_BASE_HREF, useValue: '/kvk'}],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}