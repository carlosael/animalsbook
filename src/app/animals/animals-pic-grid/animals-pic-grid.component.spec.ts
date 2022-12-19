import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsPicGridComponent } from './animals-pic-grid.component';

describe('AnimalsPicGradeComponent', () => {
  let component: AnimalsPicGridComponent;
  let fixture: ComponentFixture<AnimalsPicGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalsPicGridComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsPicGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
