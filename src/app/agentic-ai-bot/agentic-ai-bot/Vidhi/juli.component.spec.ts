import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuliComponent } from './juli.component';

describe('JuliComponent', () => {
  let component: JuliComponent;
  let fixture: ComponentFixture<JuliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
