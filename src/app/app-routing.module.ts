import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

const myRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(myRoutes),
  ],
  exports: [RouterModule],
  declarations: []

})
export class AppRoutingModule {
}
