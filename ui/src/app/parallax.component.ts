import {Observable} from 'rxjs/Rx';
import {Component, Input, OnInit, Renderer, ElementRef, ViewChild, Attribute} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { trigger, state, animate, transition, style } from '@angular/core';

@Component({
  selector: 'parallax-component',
  templateUrl: 'app/parallax.component.html',
})
export class ParallaxComponent implements OnInit
{
//  ticks = 0;
  private event: MouseEvent;
  @Input('farfaraway') farfarawayInput : string;
  @Input('faraway') farawayInput : string;
  @Input('middle') middleInput : string;
  @Input('near') nearInput : string;
  @Input('front') frontInput : string;

  @ViewChild('farfaraway') farfarawayEl: ElementRef;
  @ViewChild('faraway') farawayEl: ElementRef;
  @ViewChild('middle') middleEl: ElementRef;
  @ViewChild('near') nearEl: ElementRef;
  @ViewChild('front') frontEl: ElementRef;

  constructor(private renderer : Renderer, elm: ElementRef) {
    //this.errorNum = elm.nativeElement.getAttribute('errorNum');
    //this.farfaraway = elm.nativeElement.getAttribute('farfaraway');
  }

  ngOnInit() {
//    console.log('windows.location=' + window.location.href);
//    let timer = Observable.timer(100,200);
//    timer.subscribe(t=>this.ticks = t);
  }

  private onEvent(event: MouseEvent): void {
    this.event = event;
  }

  private coordinates(event: MouseEvent):void {
    this.renderer.setElementStyle(this.farfarawayEl.nativeElement, 'transform', 'translateY(-' + (event.clientY/100) + 'px) translateX(' + (event.clientX/100) + 'px)');
    this.renderer.setElementStyle(this.farawayEl.nativeElement, 'transform', 'translateY(-' + (event.clientY/75) + 'px) translateX(' + (event.clientX/75) + 'px)');
    this.renderer.setElementStyle(this.middleEl.nativeElement, 'transform', 'translateY(' + (event.clientY/50) + 'px) translateX(' + 0 + 'px)');
    this.renderer.setElementStyle(this.frontEl.nativeElement, 'transform', 'translateY(' + (event.clientY/10) + 'px) translateX(' + (event.clientX/10) + 'px)');
  }

}
