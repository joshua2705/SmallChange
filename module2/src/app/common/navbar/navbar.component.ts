import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var navItem = document.getElementById("navbar");
      console.log(navItem);
      if(navItem){
    if (navItem.className === "topNav") {
      navItem.className += " responsive";
    } else {
      navItem.className = "topNav";
    }   
  } 

  }

}
