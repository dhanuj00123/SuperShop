import { HtmlParser } from '@angular/compiler';
import { Directive,ElementRef,OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appZoomimg]'
})
export class ZoomimgDirective implements OnInit {

  constructor(private element:ElementRef , private render:Renderer2) { }


  ngOnInit(): void {
   (<HTMLElement> this.element.nativeElement).className='zoom';
   this.render.setStyle(this.element.nativeElement,'cursor','zoom-in')
  }

}
