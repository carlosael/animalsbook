import { AnimalsService } from './../animals.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../animal';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css'],
})
export class AnimalDetailComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animalsService: AnimalsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params.animalId;
    this.animal$ = this.animalsService.searchById(this.animalId);
  }

  likePhoto() {
    this.animalsService.likePhoto(this.animalId).subscribe((like) => {
      if (like) {
        this.animal$ = this.animalsService.searchById(this.animalId);
      }
    });
  }

  deletePhoto() {
    this.animalsService.deletePhoto(this.animalId).subscribe(
      () => {
        this.router.navigate(['/animals/']);
      },
      (error) => console.log(error)
    );
  }
}
