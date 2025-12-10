import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReenaComponent } from './reena.component';

describe('ReenaComponent', () => {
  let component: ReenaComponent;
  let fixture: ComponentFixture<ReenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
