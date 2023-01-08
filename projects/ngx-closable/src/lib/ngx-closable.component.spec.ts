import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxClosableComponent } from './ngx-closable.component';

describe('NgxClosableComponent', () => {
  let component: NgxClosableComponent;
  let fixture: ComponentFixture<NgxClosableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxClosableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxClosableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
