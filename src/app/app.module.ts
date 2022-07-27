
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { CardComponent } from './card/card.component';
import { IconComponent } from './icon/icon.component';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { OverviewComponent } from './overview/overview.component';
import { StatusComponent } from './status/status.component';
import { StatusInactiveComponent } from './status-inactive/status-inactive.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    CardComponent,
    IconComponent,
    TabContainerComponent,
    HomeComponent,
    LoginComponent,
    TableComponent,
    OverviewComponent,
    StatusComponent,
    StatusInactiveComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
