import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatSelect} from  '@angular/material/select';
import { Router } from '@angular/router';
import { ServiceProductService } from 'src/app/service/service-product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  
  btnText: string='Add product';

  constructor(
    private productService:ServiceProductService,
    private formBuilder: FormBuilder,
    private route: Router,
    @Inject(MAT_DIALOG_DATA) public editdata:any,
    private dialogRef : MatDialogRef<AddproductComponent>
    ) { }

  productForm!: FormGroup;
  
  ngOnInit(): void {
    this.productForm= this.formBuilder.group({
      id:['',Validators.required],
      productName:['',Validators.required],
      price:['',Validators.required],
      categorie:['',Validators.required],
      commentaire:['',Validators.required]      
    })

    //alert(this.data.id)
    //console.log(this.editdata);

     if(this.editdata){
      this.btnText= 'Update data';
       this.productForm.controls['id'].setValue(this.editdata.id);
       this.productForm.controls['productName'].setValue(this.editdata.productName);
       this.productForm.controls['price'].setValue(this.editdata.price);
       this.productForm.controls['categorie'].setValue(this.editdata.categorie);
       this.productForm.controls['commentaire'].setValue(this.editdata.commentaire);       
     }
  }

  addProduct(){
    if(!this.editdata){
      if(this.productForm){
        this.productService.postProduct(this.productForm.value)
                    .subscribe(data=>{
                      console.log('Product registred succesfully')
                      this.productForm.reset();
                      this.dialogRef.close();
                    })
       } 
       this.route.navigate(['/home']); 
    }else{

      this.updatedata();
    }
  }


  updatedata() {
console.log(this.editdata.id);
   this.productService.putProduct(this.editdata.id, this.productForm.value)
   .subscribe(res=>{
     console.log(res);
   })
  }

}
