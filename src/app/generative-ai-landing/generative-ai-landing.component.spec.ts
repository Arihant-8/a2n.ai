import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerativeAiLandingComponent } from './generative-ai-landing.component';

describe('GenerativeAiLandingComponent', () => {
  let component: GenerativeAiLandingComponent;
  let fixture: ComponentFixture<GenerativeAiLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerativeAiLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerativeAiLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
