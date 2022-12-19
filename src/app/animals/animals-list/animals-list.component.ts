import { AnimalsService } from './../animals.service';
import { UserService } from './../../authentication/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Animals } from '../animal';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css'],
})
export class AnimalsListComponent implements OnInit {
  animals!: Animals;

  constructor(
    private userService: UserService,
    private animalsSerice: AnimalsService
  ) {}

  ngOnInit(): void {
    this.userService.returnUser().subscribe((user) => {
      const userName = user.name ?? '';
      this.animalsSerice.userList(userName).subscribe((animals) => {
        this.animals = animals;
      });
    });
  }
}
