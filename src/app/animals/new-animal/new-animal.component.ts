import { AnimalsService } from './../animals.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css'],
})
export class NewAnimalComponent implements OnInit {
  animalForm!: FormGroup;
  file!: File;
  urlPreview!: string;
  uploadPercentage = 0;

  constructor(
    private animalsService: AnimalsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  uploadAnimal() {
    const allowComments = this.animalForm.get('allowComments')?.value ?? false;
    const description = this.animalForm.get('description')?.value ?? '';

    this.animalsService
      .uploadPhoto(description, allowComments, this.file)
      .pipe(finalize(() => this.router.navigate(['animals'])))
      .subscribe(
        (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress) {
            const total = event.total ?? 1;
            this.uploadPercentage = Math.round(100 * (event.loaded / total));
          }
        },
        (erros) => {
          console.log(erros);
        }
      );
  }

  saveFile(file: any) {
    const [photo] = file?.files;
    this.file = photo;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.urlPreview = event.target.result);
    reader.readAsDataURL(photo);
  }
}
