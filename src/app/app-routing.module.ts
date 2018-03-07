import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
