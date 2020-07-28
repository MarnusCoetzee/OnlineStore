import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreClientComponent } from './store-client.component';
import { ShopLandingPageComponent } from './shop-landing-page/shop-landing-page.component';

const routes: Routes = [
  { path: '', component: ShopLandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreClientRoutingModule { }
