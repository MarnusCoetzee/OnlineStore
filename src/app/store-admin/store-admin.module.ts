import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreAdminRoutingModule } from './store-admin-routing.module';
import { StoreAdminComponent } from './store-admin.component';


@NgModule({
  declarations: [StoreAdminComponent],
  imports: [
    CommonModule,
    StoreAdminRoutingModule
  ]
})
export class StoreAdminModule { }
