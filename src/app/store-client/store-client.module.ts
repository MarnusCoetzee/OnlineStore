import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreClientRoutingModule } from './store-client-routing.module';
import { StoreClientComponent } from './store-client.component';
import { ShopLandingPageComponent } from './shop-landing-page/shop-landing-page.component';


@NgModule({
  declarations: [StoreClientComponent, ShopLandingPageComponent],
  imports: [
    CommonModule,
    StoreClientRoutingModule
  ]
})
export class StoreClientModule { }
