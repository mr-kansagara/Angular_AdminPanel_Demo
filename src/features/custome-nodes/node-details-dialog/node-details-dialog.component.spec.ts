import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeDetailsDialogComponent } from './node-details-dialog.component';

describe('NodeDetailsDialogComponent', () => {
  let component: NodeDetailsDialogComponent;
  let fixture: ComponentFixture<NodeDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NodeDetailsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
