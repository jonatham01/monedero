import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MonederoComponent } from './components/monedero/monedero.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {
    path:"home",
    component:MonederoComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },{
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
