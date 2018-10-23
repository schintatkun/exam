import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ShowComponent } from './show/show.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {path: 'products', component: ListproductsComponent},
  {path: '', pathMatch : 'full', redirectTo: '/products'},
  {path: 'products/new', component: CreateProductComponent},
  {path: 'products/:product_id', component: ShowComponent},
  {path: 'products/:product_id/edit', component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
