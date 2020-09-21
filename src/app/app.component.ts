import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './core/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'antuit-challenge';
  tabs: Array<any> = [];
  tools: Array<any> = [];
  tabSelected: number = 0;
  dropDownItems: Array<any> = [];
  items: any = [{title: '', keys: []}];
  itemIndex: number = 0;
  chart: any = {};
  @ViewChild('tabsBar') tabsBar;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getTabs().subscribe(tabs => {
      this.tabs = tabs;
    });
    this.apiService.getTools().subscribe(tools => {
      this.tools = tools;
    });
    this.apiService.getDropdown().subscribe(items => {
      this.dropDownItems = items;
    });
    this.apiService.getItems().subscribe(items => {
      this.items = items;
    });
    this.apiService.getChart().subscribe(chart => {
      this.chart = chart;
    });
  }

  selectTab(id: number) {
    this.tabsBar.select(id);
  }

  backItem() {
    if (this.itemIndex > 0) this.itemIndex--;
  }

  forwardItem() {
    if (this.itemIndex < this.items.length-1) this.itemIndex++;
  }

  changeContent(id: number) {
  console.log('changed to ' + id);
    this.tabSelected = id;
  }
}
