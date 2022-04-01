import { Component, OnInit } from '@angular/core';
import { AddproductComponent } from '../addproduct/addproduct.component';
import {MatDialog} from '@angular/material/dialog';
import {Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog ,
    
    ) { }

  ngOnInit(): void {
  }

   // dialog open function
   openDialog() {
    const dialogRef = this.dialog.open(AddproductComponent,{
      width:'50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);      
    });
    
  }

}
