import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateproduitsComponent } from './createproduits.component';

describe('CreateproduitsComponent', () => {
  let component: CreateproduitsComponent;
  let fixture: ComponentFixture<CreateproduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateproduitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateproduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
