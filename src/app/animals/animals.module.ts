import { CardModule } from './../components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalComponent } from './animal/animal.component';
import { AnimalsPicGridComponent } from './animals-pic-grid/animals-pic-grid.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';

@NgModule({
  declarations: [
    AnimalsListComponent,
    AnimalComponent,
    AnimalsPicGridComponent,
    AnimalDetailComponent,
  ],
  imports: [CommonModule, AnimalsRoutingModule, CardModule],
})
export class AnimalsModule {}
