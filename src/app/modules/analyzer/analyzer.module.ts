import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataviewerComponent} from './components/dataviewer/dataviewer.component';
import { StatusviewerComponent } from './components/statusviewer/statusviewer.component';

@NgModule({
  declarations: [
    DataviewerComponent,
    StatusviewerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DataviewerComponent,
    StatusviewerComponent
  ]
})

export class AnalyzerModule {
}
