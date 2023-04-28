import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css'],
  providers: [DataService, LogService]
})
export class PurchasesComponent {

  items: string[] = [];
  name: string = "";

  constructor(private dataService: DataService) {} 

  addItem(name: string) {
    this.dataService.addData(name);
  }
  ngOnInit() {
    this.items = this.dataService.getData();
  }

}
