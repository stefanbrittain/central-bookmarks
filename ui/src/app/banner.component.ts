import { Component, Input, Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AppAction} from './appAction';

@Component({
  selector: 'banner-component',
  template: `<div class="banner"><ul>
                <li><a class="active" href="#home">Home</a></li>
                <li><a href="#about" (click)="displayAbout()">About</a></li>
              </ul></div>`,
})

export class BannerComponent
{
  @Output() systemMessage: EventEmitter<any> = new EventEmitter();

  displayAbout() {
    this.systemMessage.emit(new AppAction("About"));
  }
}
