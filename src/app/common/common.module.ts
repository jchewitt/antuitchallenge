import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './components/tabs/tabs.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToolComponent } from './components/tool/tool.component';
@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    TabsModule.forRoot()
  ],
  declarations: [
    HeaderComponent,
    TabsComponent,
    ToolComponent
  ],
  exports: [
    HeaderComponent,
    TabsComponent,
    ToolComponent
  ]
})
export class ComModule {}
