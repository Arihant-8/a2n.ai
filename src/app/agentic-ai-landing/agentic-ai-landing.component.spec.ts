import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenticAiLandingComponent } from './agentic-ai-landing.component';

describe('AgenticAiLandingComponent', () => {
  let component: AgenticAiLandingComponent;
  let fixture: ComponentFixture<AgenticAiLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgenticAiLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenticAiLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
