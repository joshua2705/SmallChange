import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { registerLocaleData } from '@angular/common'
@Component({
  selector: 'app-password-form-control',
  templateUrl: './password-form-control.component.html',
  styleUrls: ['./password-form-control.component.css']
})
export class PasswordFormControlComponent implements OnInit {
  LabelText:string = 'Password';
  @Output() pwdVerify = new EventEmitter<string>();
  matched: boolean = true;
  constructor() { }
  onKey(value: string) {
   
    
    var regex = new RegExp('^[a-zA-Z0-9-_-]{6,24}$');

    if (regex.test(value)) {
      this.matched = true;
      this.pwdVerify.emit(value);
      console.log(value + " matched");

      // errorBox?.style.display= "none"

      // this.passwordBox.className = "default"

      // this.onValidPassword.emit(inputvalue)
    } else {
      this.matched = false;

      // errorBox?.style.display= "block"

      // this.passwordBox.className = "failure"
    }
  }
  ngOnInit(): void {

    
   
  
}
  }


