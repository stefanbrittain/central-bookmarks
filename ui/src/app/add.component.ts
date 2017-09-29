import {Component, Input, Output, EventEmitter} from '@angular/core';
import { AppMapService} from './appmap.service';
import { AppMap} from './appmap';
import { AppMessage} from './appMessage';

@Component({
    selector: 'add-control',
    templateUrl: 'app/add.component.html',
    providers: [AppMapService],
})


export class AddComponent {

  @Input('initValue') value : string;
  @Output() systemMessage: EventEmitter<any> = new EventEmitter();
  text: string = 'Type your search';
  errorMessage: string;

  //constructor (private mapService: MapService) {}
  constructor(private appMapService: AppMapService) { }

  clear(input:HTMLInputElement) {
     input.value = '';
  }

  isValid(keyword:string, value:string) {
    if (!keyword || !value ) { return false; }
    return true;
  }

  add(keyword:string, value:string) {
    var map : AppMap;
    console.log(keyword + ' - ' + value);
    if (!this.isValid(keyword,value)) { return; }

    this.appMapService.setMap(keyword, value).subscribe(
      data => {map = data;this.systemMessage.emit(new AppMessage(true,keyword + " saved"));},
      err => {this.systemMessage.emit(this.appMapService.processError(err))});

  }

}
