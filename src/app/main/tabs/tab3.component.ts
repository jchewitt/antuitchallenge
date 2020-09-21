import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab3',
  template: `<a href='#' (click)="link.emit()">Return to Tab 1</a>`,
  styles: [``]
})
export class Tab3Component {
//THIS SHOULD REALLY ALL BE HANDLED THROUGH ROUTING, BUT FOR BREVITY SAKE
//I'VE SHORTENED IT TO AN EVENT EMITTER, THIS IS NOT THE CORRECT APPROACH
  @Output() link: EventEmitter<any> = new EventEmitter();
  constructor() {}
}
