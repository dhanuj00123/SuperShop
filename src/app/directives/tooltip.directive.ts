import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input('appTooltip') title;
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onmouseover(){
    this.renderer.setStyle(this.element.nativeElement, 'cursor' ,'pointer')
    this.renderer.setAttribute(this.element.nativeElement,'data-toggle','tooltip')
    this.renderer.setAttribute(this.element.nativeElement,'data-placement','bottom')
    this.renderer.setAttribute(this.element.nativeElement,'title',this.title)
  }

}
