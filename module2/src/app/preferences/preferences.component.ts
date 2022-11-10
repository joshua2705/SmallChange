import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-preferencest',
    templateUrl: './preferences.component.html',
    styleUrls: ['./preferences.component.css']
  })
  export class PreferencesComponent implements OnInit {

    availableStocks: any[] = [
        {"id":"S01","name":"ABC","price":120},
        {"id":"S02","name":"ABC","price":130},
        {"id":"S03","name":"ABC","price":80},
        {"id":"S04","name":"ABC","price":40}
    ] ;
    preferenceStocks: any[] = [
        {"id":"S03","name":"ABC","price":80},
        {"id":"S04","name":"ABC","price":40}
    ];

    ngOnInit(): void {
        
    }
}