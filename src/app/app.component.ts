import {Component} from '@angular/core';
import {SourceTypes} from "./modules/analyzer/components/dataviewer/dataviewer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public SourceTypesEnum = SourceTypes;
  title = 'solvann';
}
