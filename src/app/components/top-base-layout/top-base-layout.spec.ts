import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBaseLayout } from './top-base-layout';

describe('TopBaseLayout', () => {
  let component: TopBaseLayout;
  let fixture: ComponentFixture<TopBaseLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBaseLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBaseLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
