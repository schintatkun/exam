import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: any;
  orignalValue: any;
  error: String = "";
  constructor(
    private httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      let obs = this.httpService.getOneProduct(params['product_id']);
      obs.subscribe(data=>{
        console.log('get one product ', data);
        this.product = data;
        this.orignalValue = data;
      })
    })
  }
  updateProduct(){
    let obs = this.httpService.updateProduct(this.product);
    obs.subscribe(data=>{
      if('errors' in data){
        this.error = data['errors'];
      }else{
        this._router.navigate(['/'])
      }
    })
  }
  resetValue(){
    this.getProduct();
  }
  getProduct(){
    this._route.params.subscribe((params:Params)=>{
      let obs = this.httpService.getOneProduct(params['product_id']);
      obs.subscribe(data=>{
        console.log('get one product ', data);
        this.product = data;
        this.orignalValue = data;
      })
    })
  }

}
