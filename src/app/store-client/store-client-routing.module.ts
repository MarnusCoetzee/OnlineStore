import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreClientComponent } from './store-client.component';

const routes: Routes = [{ path: '', component: StoreClientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreClientRoutingModule { }
