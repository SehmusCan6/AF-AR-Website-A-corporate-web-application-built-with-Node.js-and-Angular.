import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project4 } from './project4';

describe('Project4', () => {
  let component: Project4;
  let fixture: ComponentFixture<Project4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Project4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
