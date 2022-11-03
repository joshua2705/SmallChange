import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { WalletComponent } from 'src/app/wallet/wallet.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog:MatDialog, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    var navItem = document.getElementById("navbar");
    if (navItem) {
      if (navItem.className === "topNav") {
        navItem.className += " responsive";
      } else {
        navItem.className = "topNav";
      }
    }
  }

  dropdown(): void {
    var dropdown = document.getElementById("dropdown");
    if (dropdown) {
      if (dropdown.className === "dropdown") {
        dropdown.className += " visible"
      }
      else {
        dropdown.className = "dropdown"
      }
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(WalletComponent, {
      width: '600px',
      height: '470px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  logout(): void {
    this.tokenStorageService.signOut();
  }

}


