import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { UsernameFormControlComponent } from './username-form-control/username-form-control.component';
import { PasswordFormControlComponent } from './password-form-control/password-form-control.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    UsernameFormControlComponent,
    PasswordFormControlComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginPageComponent
  ]
})
export class LoginModule { }
