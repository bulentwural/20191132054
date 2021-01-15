import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AracekleComponent } from './aracekle.component';

describe('AracekleComponent', () => {
  let component: AracekleComponent;
  let fixture: ComponentFixture<AracekleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AracekleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AracekleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
