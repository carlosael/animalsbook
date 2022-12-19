import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalComponent } from './animal/animal.component';


@NgModule({
  declarations: [AnimalsListComponent, AnimalComponent],
  imports: [
    CommonModule,
    AnimalsRoutingModule
  ]
})
export class AnimalsModule { }
