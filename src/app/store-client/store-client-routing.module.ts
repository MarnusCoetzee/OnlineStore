import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopLandingPageComponent } from './shop-landing-page/shop-landing-page.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';

const routes: Routes = [
  { path: '', component: ShopLandingPageComponent },
  { path: 'products/:id', component: AllProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreClientRoutingModule { }
