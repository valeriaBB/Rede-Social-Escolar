/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResponderenqueteComponent } from './responderenquete.component';

describe('ResponderenqueteComponent', () => {
  let component: ResponderenqueteComponent;
  let fixture: ComponentFixture<ResponderenqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponderenqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponderenqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
