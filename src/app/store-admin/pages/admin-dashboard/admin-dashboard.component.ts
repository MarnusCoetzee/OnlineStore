import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  adminID = environment.adminId;

  isLoading: boolean;

  authSubscription: Subscription;

  isAuth: boolean;

  showHome = true;
  showProducts = false;
  showClients = false;

  constructor(
    private afAuth: AngularFireAuth,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.authSubscription = this.afAuth.authState.subscribe(authResult => {
      if (authResult.uid === this.adminID) {
        this.isLoading = false;
      } else {
        this.router.navigate(['']);
      }
    })
  }

  onClickShowHome() {
    this.showHome = true;
    this.showProducts = false;
    this.showClients = false;
  }

  onClickShowProducts() {
    this.showHome = false;
    this.showProducts = true;
    this.showClients = false;
  }

  onClickShowClients() {
    this.showHome = false;
    this.showProducts = false;
    this.showClients = true;
  }

}
