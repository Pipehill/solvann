import {Component, OnInit} from '@angular/core';
import {GroupstateService} from "../../../core/services/groupstate.service";
import {TurbinesService} from "../../../core/services/turbines.service";
import {GroupState} from "../../../core/models/groupstate.model";
import {Turbine} from "../../../core/models/turbine.model";

@Component({
  selector: 'app-statusviewer',
  templateUrl: './statusviewer.component.html',
  styleUrls: ['./statusviewer.component.scss']
})
export class StatusviewerComponent implements OnInit {

  groupState!: GroupState;
  turbines!: Turbine[];

  constructor(private groupStateService: GroupstateService, private turbinesService: TurbinesService) {
  }

  ngOnInit(): void {
    this.groupStateService.getGroupstate().subscribe((data) => {
      this.groupState = data;
    })

    this.turbinesService.getTurbines().subscribe((data) => {
      this.turbines = data;
    })
  }

  turbineStatus(status:number): string {
    return status == 1 ? "Generating power" : status == -1 ? "Pumping water" : "OFF";
  }

  turbineStatusColor(status:number): string {
    return status == 1 ? "green" : status == -1 ? "purple" : "red";
  }
}
