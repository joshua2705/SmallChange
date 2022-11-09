import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NotifierService } from 'angular-notifier';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';
import { datePickerValidator } from './validation';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-form',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegisterFormComponent implements OnInit {
  hide = true;
  public registerForm!: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  private readonly notifier: NotifierService;
  constructor(
    private authService: AuthService,
    notifierService: NotifierService,
    private tokenStorage: TokenStorageService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    console.log('Hi');
    this.registerForm = new FormGroup(
      {
        firstName: new FormControl('', [
          Validators.required,
          Validators.maxLength(50),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.maxLength(50),
        ]),
        phoneNumber: new FormControl('', [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(18),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(18),
        ]),
        gender: new FormControl('', [Validators.required]),
        dob: new FormControl('', [Validators.required, datePickerValidator()]),
        risk: new FormControl('', [Validators.required]),
      },
      { validators: passwordMatchValidator }
    );
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  };

  public createUser = (userFormValue: any) => {
    console.log(this.registerForm);
    if (this.registerForm.valid) {
      this.executeUserCreation(userFormValue);
    }
  };

  private executeUserCreation = (userFormValue: any) => {
    let user: User = {
      firstName: userFormValue.firstName,
      lastName: userFormValue.lastName,
      phoneNumber: userFormValue.phoneNumber,
      email: userFormValue.email,
      password: userFormValue.password,
      confirmPassword: userFormValue.confirmPassword,
      gender: userFormValue.gender,
      dob: userFormValue.dob,
      risk: userFormValue.risk,
    };
    this.onSubmit(user);
  };

  onSubmit(user: User): void {
    console.log(user);
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      confirmPassword,
      gender,
      dob,
      risk,
    } = user;
    const username = `${firstName} ${lastName}`;

    const date = dob.getDate();
    const month = dob.getMonth() + 1;
    const year = dob.getFullYear();
    const dateOfBirth = `${year}-${month}-${date}`;
    console.log(dateOfBirth);
    this.authService
      .register(
        username,
        email,
        password,
        phoneNumber,
        gender,
        dateOfBirth,
        risk
      )
      .subscribe({
        next: (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          this.notifier.notify('success', data.message);
          this._snackBar.open("Registration Successful","",{duration:3000});
          this.router.navigate(['login']);
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = err.error.message;
          this.notifier.notify('success', this.errorMessage);
          this._snackBar.open("Registration Failed try again","",{duration:3000});
          this.isSignUpFailed = true;
        },
      });
  }
}

export interface User {
  firstName: String;
  lastName: String;
  phoneNumber: String;
  email: String;
  password: String;
  confirmPassword: String;
  gender: String;
  dob: Date;
  risk: String;
}

export const passwordMatchValidator: ValidatorFn = (
  formGroup: AbstractControl
): ValidationErrors | null => {
  return formGroup?.get('password')?.value ===
    formGroup?.get('confirmPassword')?.value
    ? null
    : { passwordMismatch: true };
};
