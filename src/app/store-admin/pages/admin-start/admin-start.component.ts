import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-start',
  templateUrl: './admin-start.component.html',
  styleUrls: ['./admin-start.component.scss'],
})
export class AdminStartComponent implements OnInit {
  adminID = environment.adminId;

  isLoading: boolean;

  authSubscription: Subscription;

  isAuth: boolean;

  form: FormGroup;

  constructor(
    private afAuth: AngularFireAuth,
    private fb: FormBuilder,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.authSubscription = this.afAuth.authState.subscribe((authResult) => {
      if (authResult) {
        if (authResult.uid === this.adminID) {
          console.log('The Admin Is Authenticated!');
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      } else {
        this.isAuth = false;
      }
      this.isLoading = false;
    });

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6), Validators.required]]
    });
  }

  async onClickLogin() {
    const email = this.form.value.email;
    const password = this.form.value.password;
    await this.afAuth.signInWithEmailAndPassword(email, password)
    .then(() => this.router.navigate(['store-admin/dashboard']));
  }
}
