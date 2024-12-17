import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsTabComponent } from './lessons-tab.component';

describe('LessonsTabComponent', () => {
  let component: LessonsTabComponent;
  let fixture: ComponentFixture<LessonsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonsTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
