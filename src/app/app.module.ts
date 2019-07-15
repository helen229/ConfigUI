import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChooseServiceComponent } from './components/choose-service/choose-service.component';
import {HeaderComponent} from './components/layout/header/header.component';
import { ChannelItemComponent } from './components/channel-item/channel-item.component';
import { ChannelListComponent } from './components/channel-list/channel-list.component';
import { FilterListComponent } from './components/filter-list/filter-list.component';
import { FilterItemComponent } from './components/filter-item/filter-item.component';
import { ConfigDrsServiceComponent } from './components/config-drs-service/config-drs-service.component';
import { ConfigDpsServiceComponent } from './components/config-dps-service/config-dps-service.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, 
        MatCardModule, 
        MatRadioModule,
        MatListModule, 
        MatIconModule,
        MatToolbarModule,
        MatInputModule,
        MatExpansionModule,
        MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ChooseServiceComponent,
    HeaderComponent,
    ChannelItemComponent,
    ChannelListComponent,
    FilterListComponent,
    FilterItemComponent,
    ConfigDrsServiceComponent,
    ConfigDpsServiceComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatListModule, 
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatExpansionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
