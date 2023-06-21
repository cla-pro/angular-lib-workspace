import { NgModule } from '@angular/core';
import { NgxClosableDirective } from './ngx-closable.directive';
import { NgxClosableToggleDirective } from './ngx-closable-toggle.directive';

@NgModule({
  declarations: [
    NgxClosableDirective,
    NgxClosableToggleDirective
  ],
  imports: [
  ],
  exports: [
    NgxClosableDirective,
    NgxClosableToggleDirective
  ]
})
export class NgxClosableModule { }
