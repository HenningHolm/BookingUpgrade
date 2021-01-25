import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpgradeGroupComponent } from './components/upgrade-group/upgrade-group.component';
import { UpgradeSlotComponent } from './components/upgrade-slot/upgrade-slot.component';
import { UpgradeDayComponent } from './components/upgrade-day/upgrade-day.component';
import { UpgradeCalenderComponent } from './components/upgrade-calender/upgrade-calender.component';
import { UpgradeMonthComponent } from './components/upgrade-month/upgrade-month.component';

@NgModule({
  declarations: [
    AppComponent,
    UpgradeGroupComponent,
    UpgradeSlotComponent,
    UpgradeDayComponent,
    UpgradeCalenderComponent,
    UpgradeMonthComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
