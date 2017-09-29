import {Component, Input, Output, EventEmitter} from '@angular/core';
import { AppMapService} from './appmap.service';
import { AppMap} from './appmap';
import { AppMessage} from './appMessage';

@Component({
    selector: 'listitem-control',
    templateUrl: 'app/listitem.component.html',
    providers: [AppMapService]
})
export class ListItemComponent {

  @Input('keyword') keyword : string
  @Input('rowNum') rowNum : string
  @Input('url') url : string
  @Output() systemMessage: EventEmitter<any> = new EventEmitter();
  text = 'Type your search';
  errorMessage: string;
  thinkAboutDelete : boolean;
  thinkAboutEdit : boolean;
  deleted : boolean;

  constructor(private appMapService: AppMapService) {
    this.thinkAboutDelete = false;
    this.thinkAboutEdit = false;
    this.deleted = false;
  }


  onThinkAboutEdit(thinkAboutEdit : boolean) {
    this.thinkAboutDelete = false;
    this.thinkAboutEdit = thinkAboutEdit;
  }

  onThinkAboutDelete(thinkAboutDelete : boolean) {
    if (this.thinkAboutDelete == true && thinkAboutDelete == true){
      this.appMapService.removeMap(this.keyword).subscribe(
        data => {
          this.systemMessage.emit(new AppMessage(true,this.keyword + " deleted"));
          this.deleted = true;},
        err => {this.systemMessage.emit(this.appMapService.processError(err))});
    } else {
      this.thinkAboutDelete = thinkAboutDelete;
    }
  }

  onUpdate(newURL : string){
    //this.selectedAppMap.value.url = url;
    var tempAppMap : AppMap;
    this.url = newURL;
    this.appMapService.setMap(this.keyword, newURL).subscribe(
      data => {
        this.systemMessage.emit(new AppMessage(true,this.keyword + " updated"));
        this.thinkAboutEdit = false;},
      err => {this.systemMessage.emit(this.appMapService.processError(err))});
  }

  onUndoDelete(){
    this.appMapService.setMap(this.keyword, this.url).subscribe(
      data => {
        this.systemMessage.emit(new AppMessage(true,this.keyword + " undeleted"));
        this.deleted = false;},
      err => {this.systemMessage.emit(this.appMapService.processError(err))});
  }

}
