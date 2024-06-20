import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterRouteComponent } from './parameter-route.component';

describe('ParameterRouteComponent', () => {
  let component: ParameterRouteComponent;
  let fixture: ComponentFixture<ParameterRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParameterRouteComponent]
    });
    fixture = TestBed.createComponent(ParameterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
