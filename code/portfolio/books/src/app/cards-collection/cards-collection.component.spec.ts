import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCollectionComponent } from './cards-collection.component';

describe('CardsCollectionComponent', () => {
  let component: CardsCollectionComponent;
  let fixture: ComponentFixture<CardsCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
