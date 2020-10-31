import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CountryComponent } from './country/country.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { ViewCountryComponent } from './country/view-country/view-country.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'country',
    component: CountryComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'users/:id',
    component: EditUserComponent
  },
  {
    path: 'view/:id',
    component: ViewUserComponent
  },
  {
    path: 'viewCountry/:name',
    component: ViewCountryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
