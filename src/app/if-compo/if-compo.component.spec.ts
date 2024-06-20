import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfCompoComponent } from './if-compo.component';

describe('IfCompoComponent', () => {
  let component: IfCompoComponent;
  let fixture: ComponentFixture<IfCompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfCompoComponent]
    });
    fixture = TestBed.createComponent(IfCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
