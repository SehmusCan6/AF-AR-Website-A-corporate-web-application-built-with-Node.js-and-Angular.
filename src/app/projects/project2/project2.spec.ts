import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project2 } from './project2';

describe('Project2', () => {
  let component: Project2;
  let fixture: ComponentFixture<Project2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Project2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
