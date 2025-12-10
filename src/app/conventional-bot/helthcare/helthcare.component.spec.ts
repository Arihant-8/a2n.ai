import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelthcareComponent } from './helthcare.component';

describe('HelthcareComponent', () => {
  let component: HelthcareComponent;
  let fixture: ComponentFixture<HelthcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelthcareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelthcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
