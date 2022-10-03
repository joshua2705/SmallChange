import { IfStmt } from '@angular/compiler';
import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-username-form-control',
  templateUrl: './username-form-control.component.html',
  styleUrls: ['./username-form-control.component.css']
})
export class UsernameFormControlComponent implements OnInit {
  
  LabelText:string = 'Username';
  @Output() usrVerify = new EventEmitter<string>();

  constructor() { }
  matched: boolean = true;
  
  
  public usernameBox:any;
 
 
  public ngOnInit(): void {
    this.usernameBox = document.getElementById("textbox-id")as HTMLInputElement;
    this.usernameBox?.addEventListener('input',(e:any)=>{
      var errorBox = document.getElementById("errorBox")  
      var inputvalue = e.target.value
      var regex = new RegExp("^[a-zA-Z0-9-_\-]{3,18}$")

        if(regex.test(inputvalue)){
          if(errorBox)
          errorBox.style.display= "none"
          this.usernameBox.className = "default"
          this.usrVerify.emit(inputvalue)
        }
        else{
          if(errorBox)
          errorBox.style.display= "block"
          this.usernameBox.className = "failure"
        }
    })
  }

}
