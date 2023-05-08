import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  providers: [DataService, LogService]
})

export class DataComponent {
//   message: string = "Data module";

//   isVerdana = true;
//   isNavy = true;

//   currentClasses = {
//     verdanaFont: this.isVerdana,
//     navyColor: this.isNavy
//   }
// visability = true;
// toggle() {
//   this.visability = !this.visability;
// }

newItem: string = "";
items: string[] = [];
constructor(private dataService: DataService) {}
addItem(name: string) {
  this.dataService.addData(name);
}
ngOnInit() {
  this.items = this.dataService.getData();
}
}
