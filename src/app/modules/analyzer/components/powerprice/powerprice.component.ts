import {Component, OnInit} from '@angular/core';
import {PowerpriceService} from '../../../core/services/powerprice.service'

@Component({
  selector: 'app-powerprice',
  templateUrl: './powerprice.component.html',
  styleUrls: ['./powerprice.component.scss']
})
export class PowerpriceComponent implements OnInit {

  currentPrice: string = "";
  historicPrices: string[];

  constructor(private powerpriceService: PowerpriceService) {
    this.historicPrices = [];
  }

  ngOnInit(): void {
    this.powerpriceService.getPowerPrice().subscribe((data) => {
      this.currentPrice = data;
    })

    this.powerpriceService.getPowerPriceHistory().subscribe((data) => {
      this.historicPrices = data.reverse();
    })
  }

  getHistoricPrices(length: number): string[] {
    return this.historicPrices.slice(1, length+1);
  }

}
