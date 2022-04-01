import { AfterViewInit, Component, ViewChild, OnInit, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';




import { Iproduct } from 'src/app/data/iproduct';
import { ServiceProductService } from 'src/app/service/service-product.service';
import { AddproductComponent } from '../addproduct/addproduct.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'productName', 'price', 'categorie', 'commentaire','action'];
  dataSource!: MatTableDataSource<Iproduct>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private  productService: ServiceProductService,
    //@Inject(MAT_DIALOG_DATA) public editdata:any,
    private dialog:MatDialog     
    ) { 
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource<Iproduct>();
      // intanciate dialog 
  }
  

  ngOnInit(): void {
    this.Allproduct();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  Allproduct(){
    return this.productService.getAllProduct()
            .subscribe(data=>
              this.dataSource.data=data
              //console.log(data)
              );
  }


  deleteProduct(id:number){
    return this.productService.deleteProduct(id)
            .subscribe(data=>{
              alert('suppression effectué avec succes');
              this.Allproduct();
            });
  }

  editProduct(id:number, data:any){
    this.productService.putProduct(id,data)
          .subscribe(res=>{
            console.log('hello');
          });

  }

  openDialog(row:any){
    const dialogRef= this.dialog.open(AddproductComponent,{
      width:'50%',
      data: row
     
    })

    
  }  

}
