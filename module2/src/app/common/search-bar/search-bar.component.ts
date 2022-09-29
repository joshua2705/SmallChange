import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() searchInputEvent = new EventEmitter<string>()

  toggleFlag:boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  openSearch():void {
    if(this.toggleFlag){
      document.getElementById("searchBox")?.focus();
      this.toggleFlag = false
    }
    else{
      document.getElementById("searchBox")?.blur();
      this.toggleFlag = true
    }
  }

  sendFilterText(filterValue: any) {
    filterValue = filterValue.target.value.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.searchInputEvent.emit(filterValue)
  }

}
