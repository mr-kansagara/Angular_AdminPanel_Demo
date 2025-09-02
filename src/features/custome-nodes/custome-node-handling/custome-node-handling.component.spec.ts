import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeNodeHandlingComponent } from './custome-node-handling.component';

describe('CustomeNodeHandlingComponent', () => {
  let component: CustomeNodeHandlingComponent;
  let fixture: ComponentFixture<CustomeNodeHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomeNodeHandlingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomeNodeHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
