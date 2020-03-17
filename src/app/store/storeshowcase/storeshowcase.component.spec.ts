import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreshowcaseComponent } from './storeshowcase.component';

describe('StoreshowcaseComponent', () => {
  let component: StoreshowcaseComponent;
  let fixture: ComponentFixture<StoreshowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreshowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreshowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
