import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['tool.component.scss']
})
export class ToolComponent {
  @Input() tool: any = {name: '', icon: ''};
  state: number = 1;

  constructor() {}

  alternateState() {
    if (this.state === 3) {
      this.state = 0;
      return;
    }
    this.state++;
  }

  setState(state: number) {
    this.state = state;
  }
}
