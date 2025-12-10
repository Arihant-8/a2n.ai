import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvantionalAiLandingComponent } from './convantional-ai-landing.component';

describe('ConvantionalAiLandingComponent', () => {
  let component: ConvantionalAiLandingComponent;
  let fixture: ComponentFixture<ConvantionalAiLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvantionalAiLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvantionalAiLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
