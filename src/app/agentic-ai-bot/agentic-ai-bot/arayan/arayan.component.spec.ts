import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArayanComponent } from './arayan.component';

describe('ArayanComponent', () => {
  let component: ArayanComponent;
  let fixture: ComponentFixture<ArayanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArayanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArayanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
