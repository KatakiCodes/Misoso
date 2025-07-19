import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLogin } from './base-login';

describe('BaseLogin', () => {
  let component: BaseLogin;
  let fixture: ComponentFixture<BaseLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
