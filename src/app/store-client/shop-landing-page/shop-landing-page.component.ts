import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-landing-page',
  templateUrl: './shop-landing-page.component.html',
  styleUrls: ['./shop-landing-page.component.scss']
})
export class ShopLandingPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClickNavigateProducts(id: string) {
    this.router.navigate(['store-client/products', id]);
  }

}
