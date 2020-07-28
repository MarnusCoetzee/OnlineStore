import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreAdminComponent } from './store-admin.component';

const routes: Routes = [{ path: '', component: StoreAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreAdminRoutingModule { }
