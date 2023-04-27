import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bold]',

})
export class BoldDirective {

  // constructor(private elementRef: ElementRef) { 
  //   this.elementRef.nativeElement.style.fontWeight = 'bold';
  // }

  // constructor(private elementRef: ElementRef, private renderer: Renderer2) { 
  //   this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", "bold")
  // }


//@HostListener
  // constructor(private elementRef: ElementRef, private renderer: Renderer2) { 
  //   this.renderer.setStyle(this.elementRef.nativeElement, "cursor", "pointer");
  // }

  // setFontWeight(val: string) {
  //   this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", val);
  // }

  // @HostListener("mouseenter") onMouseEnter() {
  //   this.setFontWeight("bold");
  // }
  // @HostListener("mouseleave") onMouseLeave() {
  //   this.setFontWeight('normal')
  // }

//@HostListener
  // private fontWeight = "normal";

  // @HostBinding("style.fontWeight") get getFontWeight() {
  //   return this.fontWeight;
  // }

  // @HostBinding("style.cursor") get getCursor() {
  //   return "pointer"
  // }
  // @HostListener("mouseenter") onMouseEnter() {
  //   this.fontWeight = "bold";
    
  // }
  // @HostListener("mouseleave") onMouseLeave() {
  //   this.fontWeight = "normal";
  // }

  //host
  // @Directive({
  //   selector: '[bold]',
  //   // host: {
  //   //   '(mouseenter)': 'onMouseEnter()',
  //   //   '(mouseleave)': 'onMouseLeave()'
  //   // }
  // })

  // constructor(private element: ElementRef, private renderer: Renderer2) {
  //   this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  // }

  // onMouseEnter(){
  //   this.setFontWeight("bold");
  // }
  // onMouseLeave() {
  //   this.setFontWeight("normal");
  // }

  // private setFontWeight(val: string) {
  //   this.renderer.setStyle(this.element.nativeElement, 'font-weight', val);
  // }

  @Input() selectedSize = "18px";
  @Input() defaultSize = "16px";
  private fontSize: string;
  private fontWeight = "normal";
  constructor() {
    this.fontSize = this.defaultSize;
  }

  @HostBinding("style.fontSize") get getFontSize() {
    return this.fontSize;
  }

  @HostBinding("style.fontWeight") get getFonyWeight(){
    return this.fontWeight;
  }
  @HostBinding("style.cursor") get getCursor() {
    return "pointer";
    }
  
  @HostListener("mouseenter") onMouseEnter() {
    this.fontWeight = "bold";
    this.fontSize = this.selectedSize;
    
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.fontWeight = "normal";
    this.fontSize = this.defaultSize;
  }
}
