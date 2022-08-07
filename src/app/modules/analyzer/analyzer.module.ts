import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PowerpriceComponent} from './components/powerprice/powerprice.component';

@NgModule({
  declarations: [
    PowerpriceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PowerpriceComponent
  ]
})
export class AnalyzerModule {
}
