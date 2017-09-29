import { NgModule }      from '@angular/core';
//import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { SearchBox } from './search-box.component';
import { AddComponent }  from './add.component';
import { AboutComponent }  from './about.component';
import { BannerComponent }  from './banner.component';
import { ToasterComponent }  from './toaster.component';
import { ListItemComponent }  from './listitem.component';
import { CountupComponent } from './countup.component';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
//  { path: '', pathMatch: 'full', redirectTo: 'first' },
 { path: 'go/:id', component: AppComponent }
//  { path: '**/:id', component: AppComponent },
  //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
//  imports: [RouterModule.forRoot(appRoutes)],
//  exports: [RouterModule],

  imports:      [ BrowserModule,  BrowserAnimationsModule, FormsModule, HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ) ],
  declarations: [ AppComponent, SearchBox, AddComponent, ListItemComponent, BannerComponent, ToasterComponent, CountupComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
