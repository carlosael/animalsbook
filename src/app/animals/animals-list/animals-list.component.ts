import { switchMap } from 'rxjs/operators';
import { AnimalsService } from './../animals.service';
import { UserService } from './../../authentication/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Animals } from '../animal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css'],
})
export class AnimalsListComponent implements OnInit {
  animals$!: Observable<Animals>;

  constructor(
    private userService: UserService,
    private animalsSerice: AnimalsService
  ) {}

  ngOnInit(): void {
    this.animals$ = this.userService.returnUser().pipe(
      switchMap((user) => {
        const userName = user.name ?? '';
        return this.animalsSerice.userList(userName);
      })
    );
  }
}
