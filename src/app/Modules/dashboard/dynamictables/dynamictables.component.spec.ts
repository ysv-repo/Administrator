import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamictablesComponent } from './dynamictables.component';

describe('DynamictablesComponent', () => {
  let component: DynamictablesComponent;
  let fixture: ComponentFixture<DynamictablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamictablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamictablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
