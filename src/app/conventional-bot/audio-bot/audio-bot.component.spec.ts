import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioBotComponent } from './audio-bot.component';

describe('AudioBotComponent', () => {
  let component: AudioBotComponent;
  let fixture: ComponentFixture<AudioBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioBotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
