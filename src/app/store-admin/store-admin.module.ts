import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreAdminRoutingModule } from './store-admin-routing.module';
import { StoreAdminComponent } from './store-admin.component';
import { AdminStartComponent } from './pages/admin-start/admin-start.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ClientsComponent } from './clients/clients.component';


@NgModule({
  declarations: [StoreAdminComponent, AdminStartComponent, AdminDashboardComponent, ProductsComponent, AdminHomeComponent, ClientsComponent],
  imports: [
    CommonModule,
    StoreAdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class StoreAdminModule { }
