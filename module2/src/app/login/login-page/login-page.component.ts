import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  

  constructor (private router: Router) {}

  ngOnInit(): void {}

    password:string = ""
    username:string = ""

  storePassword(e:any):void{
    this.password = e
  }

  storeUsername(e:any):void{
    this.username = e
  }
 
  login(): void {
    
    var regex = new RegExp('^[a-zA-Z0-9-_-]{6,24}$');
    var regex1 = new RegExp("^[a-zA-Z0-9-_\-]{3,18}$")
    if((regex1.test(this.username)) ||  (regex.test(this.password))) {
      this.router.navigateByUrl('/portfolio');
      console.log({Username:this.username, password:this.password, EncodedUsername: window.btoa(this.username), EncodedPassword : window.btoa(this.password) }) 
      this.username ="";
      this.password ="";
    } 
    else{
      alert("Invalid Login");
    } 
  }
  

}
