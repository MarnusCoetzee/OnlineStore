import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'store-admin', loadChildren: () => import('./store-admin/store-admin.module').then(m => m.StoreAdminModule) },
  { path: 'store-client', loadChildren: () => import('./store-client/store-client.module').then(m => m.StoreClientModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
