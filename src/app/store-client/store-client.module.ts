import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreClientRoutingModule } from './store-client-routing.module';
import { StoreClientComponent } from './store-client.component';
import { ShopLandingPageComponent } from './shop-landing-page/shop-landing-page.component';
import { MaterialModule } from '../material.module';
import { AllProductsComponent } from './pages/all-products/all-products.component';

@NgModule({
  declarations: [StoreClientComponent, ShopLandingPageComponent, AllProductsComponent],
  imports: [
    CommonModule,
    StoreClientRoutingModule,
    MaterialModule
  ]
})
export class StoreClientModule { }
