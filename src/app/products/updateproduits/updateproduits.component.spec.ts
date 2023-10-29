import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateproduitsComponent } from './updateproduits.component';

describe('UpdateproduitsComponent', () => {
  let component: UpdateproduitsComponent;
  let fixture: ComponentFixture<UpdateproduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateproduitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateproduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
