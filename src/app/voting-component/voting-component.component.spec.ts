import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingComponentComponent } from './voting-component.component';

describe('VotingComponentComponent', () => {
  let component: VotingComponentComponent;
  let fixture: ComponentFixture<VotingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
