import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinetableComponent } from './inlinetable.component';

describe('InlinetableComponent', () => {
  let component: InlinetableComponent;
  let fixture: ComponentFixture<InlinetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlinetableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlinetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
