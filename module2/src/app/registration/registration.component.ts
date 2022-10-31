import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import Validation from './validation';




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

  constructor() { }

  // checkoutForm = this.formBuilder.group(
  //   {
  //     email: '',
  //     password: ['', [Validators.required]],
  //     confirmPassword: ['', [Validators.required]],
  //     firstName: '',
  //     lastName: '',
  //     dob: '',
  //     phoneNumber: '',
  //     riskAppetite: '',
  //   },
  //   {
  //     validators: [Validation.match('password', 'confirmPassword')],
  //   }
  // );

  // submitted = false;

  // constructor(private formBuilder: FormBuilder) {}

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

  // onSubmit() {
  //   this.submitted = true;
  //   if (this.checkoutForm.invalid) {
  //     return;
  //   }
  //   console.log(JSON.stringify(this.checkoutForm.value, null, 2));
  // }

  // onReset(): void {
  //   this.submitted = false;
  //   this.checkoutForm.reset();
  // }

  // get f(): { [key: string]: AbstractControl } {
  //   return this.checkoutForm.controls;
  // }
}
}
