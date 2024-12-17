import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsByYearComponent } from './students-by-year.component';

describe('StudentsByYearComponent', () => {
  let component: StudentsByYearComponent;
  let fixture: ComponentFixture<StudentsByYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsByYearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
