import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogParametersComponent } from './dialog-parameters.component';

describe('DialogParametersComponent', () => {
  let component: DialogParametersComponent;
  let fixture: ComponentFixture<DialogParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
