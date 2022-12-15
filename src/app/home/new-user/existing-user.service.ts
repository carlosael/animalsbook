import { NewUserService } from './new-user.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ExistingUserService {

  constructor(private newUserService: NewUserService) { }

  userAlreadyExist() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((userName) => this.newUserService.verifyExistingUser(userName)),
        map((userExists) => (userExists ? {userExist: true} : {userExist: false})),
        first()
      )
    }
  }
}
