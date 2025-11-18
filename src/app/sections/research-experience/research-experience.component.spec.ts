import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchExperienceComponent } from './research-experience.component';

describe('ResearchExperienceComponent', () => {
  let component: ResearchExperienceComponent;
  let fixture: ComponentFixture<ResearchExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
