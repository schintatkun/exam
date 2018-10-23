import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: {name: '', qty: '', price: ''};
  error: String = "";
  constructor(
    private httpService: HttpService,
    private _route:Router
    
    ) { }
  
  ngOnInit() {
    this.resetForm();
  }

  resetForm(){
    this.product = {name: '', qty: '', price: ''};
    this.error = ''
  }
  ToHome(){
    this._route.navigate(['/products']);
  }
  newProduct(){
    let obs = this.httpService.createProduct(this.product);
    obs.subscribe(data=>{
      console.log('just create a product : ',data);
      if('errors' in data){
        this.error = data['errors'];
        console.log('print errors  ', this.error);
      }else{
        this.resetForm();
        this.ToHome();
      }
    })
  }

}
