import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ImportsModule } from 'src/app/Material/Imports.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { DynamictablesComponent } from './dynamictables/dynamictables.component';
import { DynamicTableCreatorComponent } from './dynamic-table-creator/dynamic-table-creator.component';



@NgModule({
  declarations: [HomeComponent, DynamictablesComponent, DynamicTableCreatorComponent],
  imports: [CommonModule, ImportsModule, DashboardRoutingModule,NgxChartsModule],
  exports: [],
})
export class DashboardModule {}
