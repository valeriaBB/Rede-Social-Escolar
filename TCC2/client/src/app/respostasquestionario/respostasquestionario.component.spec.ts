/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RespostasquestionarioComponent } from './respostasquestionario.component';

describe('RespostasquestionarioComponent', () => {
  let component: RespostasquestionarioComponent;
  let fixture: ComponentFixture<RespostasquestionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespostasquestionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespostasquestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
