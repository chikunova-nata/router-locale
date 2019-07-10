import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: ':lingua',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: './main/main.module#MainModule'
      }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '/en' } //':lingua/mytest'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
