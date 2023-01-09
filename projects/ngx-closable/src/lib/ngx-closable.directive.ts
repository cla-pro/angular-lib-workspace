import { AfterViewInit, Directive, HostBinding, HostListener, Input } from '@angular/core';
import { NgxClosableToggleEventModel } from "./ngx-closable-toggle-event.model";

@Directive({
  selector: '[ngxClosable]',
})
export class NgxClosableDirective implements AfterViewInit {
  @Input() closableId: string = "";

  private isClosed: boolean = false;
  private isClosable: boolean = false;

  @HostBinding('class.closed')
  public get closed(): boolean {
    return this.isClosed;
  }

  constructor() {
    document.addEventListener('NgxClosableToggleEvent', (e: any) => this.onClosableToggleEvent(e.detail))
  }

  ngAfterViewInit(): void {
    this.detectScreenSize();

  }

  @HostListener("window:resize", [])
  private onResize() {
    this.detectScreenSize();
  }

  private onClosableToggleEvent(event: NgxClosableToggleEventModel) {
    if (event.closableId === this.closableId) {
      this.toggle();
    }
  }

  private detectScreenSize(): void {
    let smallScreen = this.isSmallScreen();
    if (this.isClosable != smallScreen) {
      this.isClosed = this.isSmallScreen();
      this.isClosable = this.isSmallScreen();
    }
  }

  private isSmallScreen(): boolean {
    return window.innerWidth < 500 || window.innerHeight < 500;
  }

  private toggle(): void {
    this.isClosed = !this.isClosed;
  }
}
