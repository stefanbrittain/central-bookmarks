import { Component, Input } from '@angular/core';


@Component({
  selector: 'countup-component',
  template: `{{countUpNum}}`,
})

export class CountupComponent
{
  value : string;
  countUpNum : number = 0;


  constructor() {
  }

  @Input('initValue')
  set initValue(value: string) {
    this.value = value;
    this.countUpNum = 0;
    this.ngOnInit();
  }

  ngOnInit(){
    let refreshIntervalId = setInterval(() => {
      if (this.countUpNum === parseInt(this.value)){
        clearInterval(refreshIntervalId );
      }else{
        this.countUpNum++;
      }
  }, 40);
  }

}
