import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Graphic1Component } from './components/graphic1/graphic1.component';
import { Graphic2Component } from './components/graphic2/graphic2.component';

const routes: Routes = [

  { path: 'graphic1', component: Graphic1Component },
  { path: 'graphic2', component: Graphic2Component },
  {
    path: '',
    redirectTo: '/graphic1',
    pathMatch: 'full'
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
