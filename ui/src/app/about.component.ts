import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppAction} from './appAction';

@Component({
    selector: 'about-dialog',
    template: `<div class="popup"><button class="button" (click)="close()"><span>Close </span></button></div>`
})

export class AboutComponent { //implements OnInit, OnDestroy {
  @Output() systemMessage: EventEmitter<any> = new EventEmitter();

  close(){
    this.systemMessage.emit(new AppAction("About"));
  }
}
