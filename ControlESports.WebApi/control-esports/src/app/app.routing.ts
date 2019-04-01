import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { MainRoutes } from './main/main.routing';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutes } from './admin/admin.routing';

const appRoutes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent, children: MainRoutes },
  { path: 'admin', component: AdminComponent, children: AdminRoutes },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})


export class AppRouter { }
