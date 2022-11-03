import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NotifierService } from 'angular-notifier';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

export interface User{
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
  constructor(private authService: AuthService, notifierService: NotifierService,
    private tokenStorage: TokenStorageService,  private router: Router) {
    this.notifier = notifierService;
   }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(18)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(18)]),
      gender: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      risk: new FormControl('', [Validators.required]),
    });

  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  public createUser = (userFormValue: any) => {
    console.log(this.registerForm);
    if (this.registerForm.valid) {
      this.executeUserCreation(userFormValue);
    }
  }

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
    }
    this.onSubmit(user);
  }

  onSubmit(user: User): void {
    console.log(user);
    const {firstName, lastName, phoneNumber, email, password, confirmPassword, gender, dob,risk} = user;
    const username = `${firstName} ${lastName}`

    const date = dob.getDate();
    const month = dob.getMonth() + 1;
    const year = dob.getFullYear();
    const dateOfBirth = `${year}-${month}-${date}`
    console.log(dateOfBirth)
    this.authService.register(username, email, password, phoneNumber, gender, dateOfBirth, risk).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.notifier.notify('success', data.message);
        this.router.navigate(['portfolio'])
      },
      error: err => {
        console.log(err)
        this.errorMessage = err.error.message;
        this.notifier.notify('success', this.errorMessage);
        this.isSignUpFailed = true;
      }
    });
  }
}
