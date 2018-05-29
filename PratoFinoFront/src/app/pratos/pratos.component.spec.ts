/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PratosComponent } from './pratos.component';

describe('PratosComponent', () => {
  let component: PratosComponent;
  let fixture: ComponentFixture<PratosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
