import {Component, Input, OnInit, ElementRef, ViewChild} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToasterComponent} from './toaster.component';
import {AboutComponent} from './about.component';
import {AppMapService} from './appmap.service';
import {AppMessage} from './appMessage';
import {AppAction} from './appAction';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [AppMapService]
  //  template: `<h1>Hello {{name}}</h1><search-box placeholder="Customer Placeholder"></search-box>`,
})
export class AppComponent implements OnInit
{
  query : string;
  name = 'Angular';
  message : boolean = false;
  showAbout : boolean = false;
  @ViewChild(ToasterComponent)

  private toaster: ToasterComponent;

  constructor(private appMapService: AppMapService, elm: ElementRef) {
      this.query = elm.nativeElement.getAttribute('query');
  }

  ngOnInit() {
    this.appMapService.getStatus().subscribe(
      data => {this.displaySystemNotification(new AppMessage(true,"Service (" + data.version + ") reports status: " + data.status));},
      err => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          this.displaySystemNotification(new AppMessage(false,"Backend returned code ${err.status}, body was: ${err.error}"));
        }
      }
    );
  }

  processAction(evt:AppAction) {
    if (evt.action === "About" && this.showAbout === false){
      this.showAbout = true;
    }else if (evt.action === "About" && this.showAbout === true){
      this.showAbout = false;
    }
  }

  displaySystemNotification(evt:AppMessage) {
    this.toaster.displayMessage(evt);
  }


}
