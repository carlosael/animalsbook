import { Component, Input, OnInit } from '@angular/core';
import { Animals } from '../animal';

@Component({
  selector: 'app-animals-pic-grid',
  templateUrl: './animals-pic-grid.component.html',
  styleUrls: ['./animals-pic-grid.component.css'],
})
export class AnimalsPicGridComponent implements OnInit {
  @Input() animals!: Animals;

  constructor() {}

  ngOnInit(): void {}
}
