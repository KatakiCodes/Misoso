import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBaseLayout } from './dashboard-base-layout';

describe('DashboardBaseLayout', () => {
  let component: DashboardBaseLayout;
  let fixture: ComponentFixture<DashboardBaseLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardBaseLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardBaseLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
