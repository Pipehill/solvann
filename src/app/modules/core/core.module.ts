import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GroupstateService} from "./services/groupstate.service";
import {TurbinesService} from "./services/turbines.service";
import {PowerpriceService} from "./services/powerprice.service";
import {SolarService} from "./services/solar.service";
import {WaterinfluxService} from "./services/waterinflux.service";

@NgModule({
  declarations: [],
  providers: [
    GroupstateService,
    TurbinesService,
    PowerpriceService,
    SolarService,
    WaterinfluxService
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
}
