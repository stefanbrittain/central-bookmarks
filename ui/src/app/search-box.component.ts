import { Component, Input, Injectable, Output, EventEmitter } from '@angular/core';
import { AppMapService} from './appmap.service';
import { AppMap} from './appmap';
import { AppMessage} from './appMessage';

@Component({
    selector: 'search-box',
    templateUrl: 'app/search-box.component.html',
    providers: [AppMapService]
})

@Injectable()
export class SearchBox {

  @Input('placeholder')
  text = 'Type your search';
  appMaps : AppMap[];
  selectedAppMap : AppMap;
  @Output() systemMessage: EventEmitter<any> = new EventEmitter();


  constructor(private appMapService: AppMapService) {}

  //search(input:HTMLInputElement) {
  search(input:string) {
    this.appMapService.getMaps(input).subscribe(
      data => {this.appMaps = data},
      err => {this.displayNotification(this.appMapService.processError(err))});
  }

  onSelect(appMap: AppMap): void {
    this.selectedAppMap = appMap;
  }

  onClose(): void {
    this.selectedAppMap = null;
  }

  displayNotification(evt:AppMessage) {
    this.systemMessage.emit(evt);
  }

  hasSearched():boolean{
    return (this.appMaps !== undefined);
  }
}
