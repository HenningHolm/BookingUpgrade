import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeMonthComponent } from './upgrade-month.component';

describe('UpgradeMonthComponent', () => {
  let component: UpgradeMonthComponent;
  let fixture: ComponentFixture<UpgradeMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradeMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
