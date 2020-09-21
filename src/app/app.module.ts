import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComModule } from './common/common.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApiService } from './core/api.service';
import { Tab1Component } from './main/tabs/tab1.component';
import { Tab2Component } from './main/tabs/tab2.component';
import { Tab3Component } from './main/tabs/tab3.component';

@NgModule({
  declarations: [
    AppComponent,
    Tab1Component,
    Tab2Component,
    Tab3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
       NgxEchartsModule.forRoot({
          echarts: () => import('echarts')
        })
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
