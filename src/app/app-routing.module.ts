import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefineNameComponent } from './define-name/define-name.component';
import { DetailComponent } from './detail/detail.component';
import { GiveAccessComponent } from './give-access/give-access.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'editname', component: DefineNameComponent },
  { path: 'access', component: GiveAccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
