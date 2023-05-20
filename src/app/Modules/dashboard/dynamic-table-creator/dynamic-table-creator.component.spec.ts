import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableCreatorComponent } from './dynamic-table-creator.component';

describe('DynamicTableCreatorComponent', () => {
  let component: DynamicTableCreatorComponent;
  let fixture: ComponentFixture<DynamicTableCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicTableCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicTableCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
