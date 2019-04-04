import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewmarketComponent } from './brewmarket.component';

describe('BrewmarketComponent', () => {
  let component: BrewmarketComponent;
  let fixture: ComponentFixture<BrewmarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewmarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
