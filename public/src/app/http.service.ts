import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getProducts(){
    return this._http.get('/api/products');
  }
  createProduct(item){
    return this._http.post('/api/products',item);
  }
  getOneProduct(id){
    return this._http.get('/api/products/'+id);
  }
  // createQuote(quote){
  //   return this._http.post('/quotes', quote);
  // }
  deleteProduct(id){
    return this._http.delete('/api/products/'+id);
  }
  // castVote(num,quote_id){
  //   return this._http.patch('/quotes/'+quote_id, {votes:num})
  // }
  updateProduct(product){
    return this._http.put('/api/products/'+product._id, product)
  }
}
