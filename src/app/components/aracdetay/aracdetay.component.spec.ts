import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AracdetayComponent } from './aracdetay.component';

describe('AracdetayComponent', () => {
  let component: AracdetayComponent;
  let fixture: ComponentFixture<AracdetayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AracdetayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AracdetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
