import { Component, Input, OnInit } from '@angular/core';

const API = 'http://localhost:3000';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent implements OnInit {
  private originalUrl = '';

  @Input() descricao = '';

  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.originalUrl = url;
    } else {
      this.originalUrl = `${API}/imgs/${url}`;
    }
  }

  get url(): string {
    return this.originalUrl;
  }

  constructor() {}

  ngOnInit(): void {}
}
