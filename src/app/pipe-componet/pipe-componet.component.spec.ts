import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeComponetComponent } from './pipe-componet.component';

describe('PipeComponetComponent', () => {
  let component: PipeComponetComponent;
  let fixture: ComponentFixture<PipeComponetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipeComponetComponent]
    });
    fixture = TestBed.createComponent(PipeComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
