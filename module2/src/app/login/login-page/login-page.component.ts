import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  

  constructor (private router: Router,  private loginService:LoginService) {}

  ngOnInit(): void {
    this.getUsers();
  }
  

  username: string = ""
  password: string = ""
  users: User[] = []
  authenticated: boolean = false;

  displayUserName(value: string){
    this.username = value;
  }

  displayPassword(value: string){
    this.password = value; 
  }

  getUsers(){
    this.loginService.getUsers().subscribe(incomingData => this.users=incomingData)
  }

  public authenticate(): void {  
    this.users.forEach(creds => {
      if(creds.password === this.password && creds.username === this.username){
        this.authenticated = true;
      }
      else{
        alert("Invalid login")
       this.router.navigateByUrl('login')
       
      }


    });
    if(this.authenticated==true){
      this.router.navigateByUrl('portfolio');
    }
  }

}