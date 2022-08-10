import {Component, Input, OnInit} from '@angular/core';
import {PowerpriceService} from "../../../core/services/powerprice.service";
import {SolarService} from "../../../core/services/solar.service";
import {WaterinfluxService} from "../../../core/services/waterinflux.service";

export enum SourceTypes {'POWER', 'SOLAR', 'WATERINFLUX'}

@Component({
  selector: 'app-dataviewer',
  templateUrl: './dataviewer.component.html',
  styleUrls: ['./dataviewer.component.scss']
})
export class DataviewerComponent implements OnInit {

  @Input() type: SourceTypes = SourceTypes.POWER;

  current: string = "";
  historic: string[];
  unit: string = "";
  digitsInfo: string = "1.2-2";

  constructor(private powerpriceService: PowerpriceService, private solarService: SolarService, private waterinfluxService: WaterinfluxService) {
    this.historic = [];
  }

  ngOnInit(): void {
    switch (this.type) {
      case SourceTypes.POWER:
        this.powerpriceService.getPowerPrice().subscribe((data) => {
          this.current = data;
        })

        this.powerpriceService.getPowerPriceHistory().subscribe((data) => {
          this.historic = data.reverse();
        })
        this.unit = "øre/kWh"
        this.digitsInfo = "1.2-2"
        break;
      case SourceTypes.SOLAR:
        this.solarService.getSolarProduction().subscribe((data) => {
          this.current = data;
        })

        this.solarService.getSolarProductionHistory().subscribe((data) => {
          this.historic = data.reverse();
        })
        this.unit = "kWh/s"
        this.digitsInfo = "1.4-4"
        break;
      case SourceTypes.WATERINFLUX:
        this.waterinfluxService.getWaterInflux().subscribe((data) => {
          this.current = data;
        })

        this.waterinfluxService.getWaterInfluxHistory().subscribe((data) => {
          this.historic = data.reverse();
        })
        this.unit = "m3/s"
        this.digitsInfo = "1.3-3"
        break;
      default:
        console.log("TYPE " + this.type + " is not supported")
        break;
    }
  }

  getHistoric(length: number): string[] {
    return this.historic.slice(1, length+1);
  }

}
