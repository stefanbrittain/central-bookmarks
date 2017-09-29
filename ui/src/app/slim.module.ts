import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ParallaxComponent }  from './parallax.component';
import { E404Component }  from './e404.component';
import { BannerComponent }  from './banner.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
//  imports: [RouterModule.forRoot(appRoutes)],
//  exports: [RouterModule],BrowserAnimationsModule

  imports:      [ BrowserModule, ],
  declarations: [ ParallaxComponent,E404Component,BannerComponent ],
  bootstrap:    [ E404Component ]
})
export class AppModule { }
