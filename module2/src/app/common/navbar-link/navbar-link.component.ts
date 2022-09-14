import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-navbar-link',
  templateUrl: './navbar-link.component.html',
  styleUrls: ['./navbar-link.component.css']
})
export class NavbarLinkComponent implements OnInit {

  constructor() { }
  @Input() NavbarText = 'Portfolio';
  @Input() NavbarLink = "#"

  ngOnInit(): void {
  }

}
