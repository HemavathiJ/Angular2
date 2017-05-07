import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterComponentComponent } from './twitter-component.component';

describe('TwitterComponentComponent', () => {
  let component: TwitterComponentComponent;
  let fixture: ComponentFixture<TwitterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
