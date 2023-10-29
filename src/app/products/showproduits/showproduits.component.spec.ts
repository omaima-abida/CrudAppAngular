import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowproduitsComponent } from './showproduits.component';

describe('ShowproduitsComponent', () => {
  let component: ShowproduitsComponent;
  let fixture: ComponentFixture<ShowproduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowproduitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowproduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
