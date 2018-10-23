import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  product: any;
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
      })
    })
  }
  deleteProduct(id){
  let obs = this.httpService.deleteProduct(id);
  obs.subscribe(data=>{
    console.log("just got deleted ", data);
    this._router.navigate(['/products']);
  })
  }
}
