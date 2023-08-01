import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen
  }
  // private show: Boolean
  
  // @HostListener('click') toggleOpen() {
  //   if (this.show === false) {
  //     this.el.nativeElement.classList.add('open')
  //     this.show = true
  //   } else {
  //     this.el.nativeElement.classList.remove('open')
  //     this.show = false
  //   }
  // }

  // constructor(private el: ElementRef, private renderer: Renderer2) {
  //   this.show = false
  // }

}
