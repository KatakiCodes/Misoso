import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemCard } from './task-item-card';

describe('TaskItemCard', () => {
  let component: TaskItemCard;
  let fixture: ComponentFixture<TaskItemCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskItemCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskItemCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
