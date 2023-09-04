/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgenturComponent } from './agentur.component';

describe('AgenturComponent', () => {
  let component: AgenturComponent;
  let fixture: ComponentFixture<AgenturComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenturComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
