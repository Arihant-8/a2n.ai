import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandraComponent } from './sandra.component';

describe('SandraComponent', () => {
  let component: SandraComponent;
  let fixture: ComponentFixture<SandraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SandraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SandraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
