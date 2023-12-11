import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NgxClosableToggleDirective } from './ngx-closable-toggle.directive';

@Component({
  template: '<div ngxClosableToggle></div>'
})
class TestComponent {}

describe('NgxClosableToggleDirective', () => {
  let debugElements: DebugElement[];

  beforeEach(() => {
    let fixture = TestBed.configureTestingModule({
      declarations: [NgxClosableToggleDirective, TestComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).createComponent(TestComponent);
    fixture.detectChanges();
    debugElements = fixture.debugElement.queryAll(By.directive(NgxClosableToggleDirective));
  });

  it('should be created', () => {
    expect(debugElements.length).toBe(1);
  });

  // TODO test the sending of the CustomEvent
  // TODO test the "hiding"/"showing" of the button when the window is resized
});
