import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/Components/layout/layout.component';
import { UsersComponent } from './users/users.component';
import { InlinetableComponent } from './inlinetable/inlinetable.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: UsersComponent,
      },
      {
        path:'inlineEdit',
        component:InlinetableComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
