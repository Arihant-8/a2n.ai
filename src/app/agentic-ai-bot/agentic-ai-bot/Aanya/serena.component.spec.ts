import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerenaComponent } from './serena.component';

describe('SerenaComponent', () => {
  let component: SerenaComponent;
  let fixture: ComponentFixture<SerenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
