import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleHomeComponent } from './sample-home/sample-home.component';

const routes: Routes = [
  {path: 'sample', component: SampleHomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
