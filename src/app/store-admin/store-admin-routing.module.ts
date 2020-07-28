import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminStartComponent } from './pages/admin-start/admin-start.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: '', component: AdminStartComponent },
  { path: 'dashboard', component: AdminDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreAdminRoutingModule { }
