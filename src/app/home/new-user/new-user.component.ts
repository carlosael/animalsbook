import { NewUserService } from './new-user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from './new-user';
import { lowercaseValidator } from './lowercase.validator';
import { ExistingUserService } from './existing-user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private existingUserService: ExistingUserService) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email]],
      fullName: ['', Validators.required, Validators.minLength(4)],
      userName: ['', [lowercaseValidator], [this.existingUserService.userAlreadyExist()]],
      password: ['']
    })
  }

  signUp() {
    const newUser = this.newUserForm.getRawValue() as NewUser;
    console.log(newUser)
  }
}
