import { AfterViewInit, Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ngxClosableToggle]'
})
export class NgxClosableToggleDirective implements AfterViewInit {
  @Input() closableId: string = "";

  private isClosable: boolean = false;

  @HostBinding('class.ngx-closed')
  public get closed() {
    return !this.isClosable;
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.detectScreenSize();
  }

  @HostListener("window:resize", [])
  private onResize() {
    this.detectScreenSize();
  }

  @HostListener('click', ['$event']) onClick($event: any){
    this.toggle();
  }

  detectScreenSize(): void {
    let smallScreen = this.isSmallScreen();
    if (this.isClosable != smallScreen) {
      this.isClosable = this.isSmallScreen();
    }
  }

  isSmallScreen(): boolean {
    return window.innerWidth < 960;
  }

  toggle(): void {
    let event: CustomEvent = new CustomEvent('NgxClosableToggleEvent', {
      bubbles: true,
      detail: { closableId: this.closableId }
    });

    document.dispatchEvent(event);
  }
}
