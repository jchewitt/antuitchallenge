import { Component, Input, OnInit, OnChange ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { TabContentDirective } from './tab-content.directive';

@Component({
  selector: 'app-ad-banner',
  template: `
              <ng-template tabContent></ng-template>

            `
})
export class TabContentComponent implements OnInit, OnChange {
  @Input() tabContent: any;
  @ViewChild(TabContentDirective, {static: true}) tabContent: TabContentDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnChange() {
    this.loadComponent();
  }


  loadComponent() {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(tabContent);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<any>(componentFactory);
    componentRef.instance.data = tabContent.data;
  }

}


