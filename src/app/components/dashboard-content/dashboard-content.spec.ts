import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContent } from './dashboard-content';

describe('DashboardContent', () => {
  let component: DashboardContent;
  let fixture: ComponentFixture<DashboardContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
