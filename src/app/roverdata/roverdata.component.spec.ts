import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverdataComponent } from './roverdata.component';

describe('RoverdataComponent', () => {
  let component: RoverdataComponent;
  let fixture: ComponentFixture<RoverdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoverdataComponent]
    });
    fixture = TestBed.createComponent(RoverdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
