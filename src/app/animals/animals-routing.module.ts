import { AnimalsListComponent } from './animals-list/animals-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AnimalsListComponent,
  },
  {
    path: ':animalId',
    component: AnimalDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsRoutingModule {}
