import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { SampleHomeComponent } from './sample-home/sample-home.component';


@NgModule({
  declarations: [
    SampleHomeComponent
  ],
  imports: [
    CommonModule,
    SampleRoutingModule
  ]
})
export class SampleModule { }
