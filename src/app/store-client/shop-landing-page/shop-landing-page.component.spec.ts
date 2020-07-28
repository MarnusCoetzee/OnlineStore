import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopLandingPageComponent } from './shop-landing-page.component';

describe('ShopLandingPageComponent', () => {
  let component: ShopLandingPageComponent;
  let fixture: ComponentFixture<ShopLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
