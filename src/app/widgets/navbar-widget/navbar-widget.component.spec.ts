import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarWidgetComponent } from './navbar-widget.component';

describe('NavbarWidgetComponent', () => {
  let component: NavbarWidgetComponent;
  let fixture: ComponentFixture<NavbarWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
