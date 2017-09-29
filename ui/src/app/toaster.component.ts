import {Observable} from 'rxjs/Rx';
import {Component} from '@angular/core';
import { AppMessage} from './appMessage';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';



@Component({
  selector: 'toaster-component',
  template: `<div *ngIf="visible" class="{{typeOfMessage}}"  (click)="close()" [@flyInOut]="state" (@flyInOut.done)="animationDone($event)">{{message}}</div>`,
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateY(140%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(-20%)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateY(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateY(-20%)', offset: 0.3}),
          style({opacity: 0, transform: 'translateY(140%)',  offset: 1.0})
        ]))
      ])
    ])
  ]

})

export class ToasterComponent {
  visible:boolean = false;
  message:string="Opps!";
  typeOfMessage:string="toaster-info";

  animationDone(event:AnimationEvent){
    var that = this;
    setTimeout(function(){that.visible=false},3000);
  }

  displayMessage(message:AppMessage){
    this.message = message.message;
    if (message.info === true){
      this.typeOfMessage = "toaster-info";
    } else {
      this.typeOfMessage = "toaster-error";
    }
    this.setVisible();
  }

  setVisible(){
    this.visible = true;
  }

  close(){
    this.visible=false
  }
}
