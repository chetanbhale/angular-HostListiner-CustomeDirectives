import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppHIghlite]',
})
export class AppHIghliteDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}
