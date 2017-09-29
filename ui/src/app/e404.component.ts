import {Observable} from 'rxjs/Rx';
import {Component} from '@angular/core';

@Component({
  selector: 'e404-component',
  template: `<div class="app"><banner-component></banner-component><parallax-component errorNum="404"
              front="assets/parlax/4.svg"
              near="assets/parlax/3.svg"
              middle="assets/parlax/2.svg"
              faraway="assets/parlax/1.svg"
              farfaraway="assets/parlax/0.svg">
                Loading</parallax-component>
              </div>`,
})

export class E404Component
{

}
