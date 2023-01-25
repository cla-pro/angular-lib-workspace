import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NgxClosableDirective } from './ngx-closable.directive';

@Component({
  template: '<div ngxClosable></div>'
})
class TestComponent {}

describe('NgxClosableDirective', () => {
  let debugElements: DebugElement[];

  beforeEach(() => {
    let fixture = TestBed.configureTestingModule({
      declarations: [NgxClosableDirective, TestComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).createComponent(TestComponent);
    fixture.detectChanges();
    debugElements = fixture.debugElement.queryAll(By.directive(NgxClosableDirective));
  });

  it('should be created', () => {
    expect(debugElements.length).toBe(1);
  });
});
