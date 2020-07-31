import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  sunglassesSubscription: Subscription;
  watchesSubscription: Subscription;

  sunglasses: Array<any>;
  watches: Array<any>;

  isLoading: boolean;

  constructor(
    private db: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.isLoading = true;

    try {

      this.sunglassesSubscription = this.db.collection('sunglasses').valueChanges().subscribe((sunglasses) => {
        this.sunglasses = sunglasses;
        console.log(this.sunglasses);
      });

      this.sunglassesSubscription = this.db.collection('watches').valueChanges().subscribe((watches) => {
        this.watches = watches;
        console.log(this.watches);
      });

    } catch (error) {
      console.log(error);
      this.isLoading = false;
      return;
    } finally {
      this.isLoading = false;
    }
  }

}
