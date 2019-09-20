import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlayingViewComponent } from './now-playing-view.component';

describe('NowPlayingViewComponent', () => {
  let component: NowPlayingViewComponent;
  let fixture: ComponentFixture<NowPlayingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowPlayingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowPlayingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
