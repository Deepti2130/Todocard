import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrolltop]'
})
export class ScrolltopDirective {

  constructor() { }


  // Listen to events like click to trigger the scroll to top
  @HostListener('click') onClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
