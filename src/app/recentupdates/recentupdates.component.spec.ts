import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentupdatesComponent } from './recentupdates.component';

describe('RecentupdatesComponent', () => {
  let component: RecentupdatesComponent;
  let fixture: ComponentFixture<RecentupdatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentupdatesComponent]
    });
    fixture = TestBed.createComponent(RecentupdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
