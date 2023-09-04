/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FlugStraeckenComponent } from './FlugStraecken.component';

describe('FlugStraeckenComponent', () => {
  let component: FlugStraeckenComponent;
  let fixture: ComponentFixture<FlugStraeckenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlugStraeckenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlugStraeckenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
