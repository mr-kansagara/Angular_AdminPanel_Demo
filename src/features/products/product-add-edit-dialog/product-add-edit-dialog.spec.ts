import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddEditDialog } from './product-add-edit-dialog';

describe('ProductAddEditDialog', () => {
  let component: ProductAddEditDialog;
  let fixture: ComponentFixture<ProductAddEditDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductAddEditDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAddEditDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
