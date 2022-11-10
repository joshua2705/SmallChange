import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
    selector: 'app-preferencest',
    templateUrl: './preferences.component.html',
    styleUrls: ['./preferences.component.css']
  })
  export class PreferencesComponent implements OnInit {

    confirmed:boolean = true;

    constructor(private _snackBar:MatSnackBar){}

    formatLabel(value: number | null) {
        if (!value) {
          return 0;
        }
    
        if (value >= 1000) {
          return Math.round(value / 1000) + 'k';
        }
    
        return value;
      }

    ngOnInit(): void {
        
    }

    savedToast(){
        this._snackBar.open("Preferences saved successfully","",{duration:3000})
      }
}