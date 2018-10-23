import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {
  Products: any;
  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.ListAllProduct();
  }

  ListAllProduct(){
    let obs = this.httpService.getProducts();
    obs.subscribe(data=>{
      console.log('Got all Products from DB ', data);
      this.Products = data;
    })
  }

}
