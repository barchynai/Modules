import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { SampleModule } from './sample/sample.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    SampleModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
