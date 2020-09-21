import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() tabs: Array<any> = [];
  @Output() tabSelected: EventEmitter<number> = new EventEmitter();
  @ViewChild('tabset') tabset: any;

  selected(id: number) {
    this.tabSelected.emit(id);
  }

  select(id: number) {
    this.tabset.tabs[id].active = true;
  }

}
