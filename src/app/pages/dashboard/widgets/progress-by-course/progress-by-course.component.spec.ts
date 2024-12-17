import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressByCourseComponent } from './progress-by-course.component';

describe('ProgressByCourseComponent', () => {
  let component: ProgressByCourseComponent;
  let fixture: ComponentFixture<ProgressByCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressByCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressByCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
