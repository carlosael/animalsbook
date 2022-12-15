import { Router } from '@angular/router';
import { NewUserService } from './new-user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from './new-user';
import { lowercaseValidator } from './lowercase.validator';
import { ExistingUserService } from './existing-user.service';
import { samePasswordAndUserValidator } from './same-password-and-user.validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;
  userExists = false;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private existingUserService: ExistingUserService,
    private router: Router) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
      email: ['',[Validators.required, Validators.email]],
      fullName: ['',[Validators.required, Validators.minLength(4)]],
      userName: ['',[lowercaseValidator]],
      password: ['']
      },
      {
        validators: [samePasswordAndUserValidator]
      }
    )
  }

  signUp() {
    if(this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as NewUser;
      this.newUserService.signUp(newUser).subscribe(() => {
        this.router.navigate(['']);
      },
      (errors) => {
        this.userExists = true;
      })
    }

  }
}
