import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

export interface User{
  email: String;
  password: String;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  hide = true;
  public loginForm!: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor (private authService: AuthService,  private tokenStorage: TokenStorageService,
           private router: Router  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.router.navigate(['portfolio'])
    }
    else{
      this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(18)])
      });
    }

  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  public LoginUser = (userFormValue: any) => {
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      this.executeUserLogin(userFormValue);
    }
  }

  private executeUserLogin = (userFormValue: any) => {
    let user: User = {
      email: userFormValue.email,
      password: userFormValue.password
    }
    this.onSubmit(user);
  }

  onSubmit(user: User): void {
    console.log(user)
    const { email, password } = user;

    this.authService.login(email, password).subscribe({
      next: data => {
        console.log(data)
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        alert("User logged in!")
        this.router.navigate(['portfolio'])
      },
      error: err => {
        console.log(err)
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        alert("login failed")
        // this.reloadPage();
      }
    });
  }

  reloadPage(): void {
    // window.location.reload();
  }
}
