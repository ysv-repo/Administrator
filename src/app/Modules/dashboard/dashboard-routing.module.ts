import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CanActivateService } from 'src/app/Service/CanActivateService';
import { LayoutComponent } from '../shared/Components/layout/layout.component';
import { DynamictablesComponent } from './dynamictables/dynamictables.component';
import { DynamicTableCreatorComponent } from './dynamic-table-creator/dynamic-table-creator.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,canActivate :[CanActivateService]
      },
      {
        path: 'CreateDynamicTable',
        component: DynamicTableCreatorComponent
      },
      {
        path: 'dynamicTable',
        component: DynamictablesComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
