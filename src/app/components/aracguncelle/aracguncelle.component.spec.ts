import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AracguncelleComponent } from './aracguncelle.component';

describe('AracguncelleComponent', () => {
  let component: AracguncelleComponent;
  let fixture: ComponentFixture<AracguncelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AracguncelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AracguncelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
