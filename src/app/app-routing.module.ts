import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseServiceComponent } from './components/choose-service/choose-service.component';
import { ConfigDrsServiceComponent } from './components/config-drs-service/config-drs-service.component';
import { ConfigDpsServiceComponent } from './components/config-dps-service/config-dps-service.component';


const routes: Routes = [
  { path: '', component: ChooseServiceComponent },
  { path: 'drs', component: ConfigDrsServiceComponent },
  { path: 'dps', component: ConfigDpsServiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
