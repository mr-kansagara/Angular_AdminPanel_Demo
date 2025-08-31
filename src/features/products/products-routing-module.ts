import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListing } from './products-listing/products-listing';
import { ENDPOINTS, ROUTES_ENUMS } from '../../constants/Endpoint.constant';

const routes: Routes = [
  {
    path: ROUTES_ENUMS.PRODUCT_LIST,
    component: ProductsListing
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
