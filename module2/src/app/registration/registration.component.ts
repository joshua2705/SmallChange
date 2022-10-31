import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  NgForm,
  Validators,
} from '@angular/forms';
import Validation from './validation';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegisterFormComponent implements OnInit {
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

  ngOnInit(): void {}

  hide = true;

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
