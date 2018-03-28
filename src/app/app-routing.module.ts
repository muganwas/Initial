import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { InMemoryDataService } from './in-memery-data.service';

const routes: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'api/heroes', component: InMemoryDataService }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {


 }
