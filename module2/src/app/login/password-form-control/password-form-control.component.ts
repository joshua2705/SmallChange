import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-password-form-control',
  templateUrl: './password-form-control.component.html',
  styleUrls: ['./password-form-control.component.css']
})
export class PasswordFormControlComponent implements OnInit {
  LabelText:string = 'Password';
  @Output() onValidPassword = new EventEmitter();
  constructor() { }
  public PasswordBox:any;
  ngOnInit(): void {

    this.PasswordBox = document.getElementById("textbox-id")as HTMLInputElement;
    this.PasswordBox?.addEventListener('input',(e:any)=>{
      var errorBox = document.getElementById("errorBox")  
      var inputvalue = e.target.value
      var regex = new RegExp("^[a-zA-Z0-9-_\-]{6,24}$")

        if(regex.test(inputvalue)){
          if(errorBox)
          errorBox.style.display= "none"
          this.PasswordBox.className = "default"
          this.onValidPassword.emit(inputvalue)
        }
        else{
          if(errorBox)
          errorBox.style.display= "block"
          this.PasswordBox.className = "failure"
        }
    })
  
}
  }


