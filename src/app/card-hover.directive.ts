import { Directive, ElementRef, Renderer, HostListener, HostBinding,Input  } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {
   // @Input('appCardHover')
   config: Object = {
   querySelector: 'h6'
  }
  @HostBinding('class.card-outline-danger') private ishovering: boolean;
  constructor(private el: ElementRef, private renderer: Renderer) {
    // renderer.setElementStyle(el.nativeElement, 'background-color', 'pink');
  }
  @HostListener('mouseover') onHover(){
    // window.alert("hovered");
    let part = this.el.nativeElement.querySelector(this.config.querySelector)
    this.renderer.setElementStyle(part, 'display', 'block');
    this.ishovering = true;
  }
  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(part, 'display', 'none');
    this.ishovering = false;
}
}
