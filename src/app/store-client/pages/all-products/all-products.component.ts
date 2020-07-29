import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../../../models/models';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  isLoading: boolean;

  productType: string;

  title: String;
  description: String;

  isInStock: boolean;

  productsSubscription: Subscription;
  products: Array<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private db: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.productType = this.activatedRoute.snapshot.paramMap.get('id');
    this.setTitle(this.productType);
    this.getProductFromDB(this.productType);
  }

  private setTitle(product: string) {
    if (product === 'watches') {
      this.title = 'All watches for sale';
      this.description = 'Luxurios & functional modern time pieces that will tell you the time';
    }
    if (product === 'sunglasses') {
      this.title = 'All sunglasses for sale';
      this.description = 'Luxurios & functional modern sunglasses that will shade your eyes';
    }
  }

  private async getProductFromDB(product: string) {
    this.isLoading = true;
    this.db.collection(product).valueChanges().subscribe(products => {
      this.products = products;
      this.isLoading = false;
    })
  }

}
