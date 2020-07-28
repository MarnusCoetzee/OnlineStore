import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreClientRoutingModule } from './store-client-routing.module';
import { StoreClientComponent } from './store-client.component';


@NgModule({
  declarations: [StoreClientComponent],
  imports: [
    CommonModule,
    StoreClientRoutingModule
  ]
})
export class StoreClientModule { }
