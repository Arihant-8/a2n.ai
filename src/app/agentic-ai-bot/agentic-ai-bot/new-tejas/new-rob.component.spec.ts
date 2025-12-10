import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRobComponent } from './new-rob.component';

describe('NewRobComponent', () => {
  let component: NewRobComponent;
  let fixture: ComponentFixture<NewRobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
