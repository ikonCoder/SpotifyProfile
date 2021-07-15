import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProfileMenuComponent } from './nav-profile-menu.component';

describe('HeaderProfileMenuComponent', () => {
  let component: HeaderProfileMenuComponent;
  let fixture: ComponentFixture<HeaderProfileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderProfileMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderProfileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
