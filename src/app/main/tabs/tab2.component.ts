import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tab2',
  template: `tab2! <div echarts [options]="options" class="demo-chart"></div>`,
  styles: [``]
})
export class Tab2Component implements OnInit, OnChanges {
  @Input() data: any = {};
  constructor() {}
  options: any;
  ngOnChanges(changes) {
    console.log(changes);
  }
  ngOnInit(): void {
    console.log(this.data);
    this.options = {
        title: {
          text: 'Simple Graph'
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'none',
            symbolSize: 60,
            roam: true,
            label: {
              normal: {
                show: true
              }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              normal: {
                textStyle: {
                  fontSize: 20
                }
              }
            },
            data: this.data,
            // links: [],
            links: [{
              source: 0,
              target: 1,
              symbolSize: [5, 20],
              label: {
                normal: {
                  show: true
                }
              },
              lineStyle: {
                normal: {
                  width: 5,
                  curveness: 0.2
                }
              }
            }, {
              source: 'Node 2',
              target: 'Node 1',
              label: {
                normal: {
                  show: true
                }
              },
              lineStyle: {
                normal: { curveness: 0.2 }
              }
            }, {
              source: 'Node 1',
              target: 'Node 3'
            }, {
              source: 'Node 2',
              target: 'Node 3'
            }, {
              source: 'Node 2',
              target: 'Node 4'
            }, {
              source: 'Node 1',
              target: 'Node 4'
            }],
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 2,
                curveness: 0
              }
            }
          }
        ]
      };
  }
}
