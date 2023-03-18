import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appFocusColor]'
})
export class FocusColorDirective {

  constructor(private elRef: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.elRef.nativeElement.style.backgroundColor = '#dcdcdc';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.elRef.nativeElement.style.backgroundColor = '#f7f7f7';
  }

}
