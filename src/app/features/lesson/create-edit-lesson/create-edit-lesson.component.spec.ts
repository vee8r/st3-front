import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditLessonComponent } from './create-edit-lesson.component';

describe('CreateEditLessonComponent', () => {
  let component: CreateEditLessonComponent;
  let fixture: ComponentFixture<CreateEditLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEditLessonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateEditLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
