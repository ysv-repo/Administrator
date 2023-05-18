import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ImportsModule } from 'src/app/Material/Imports.module';
import { BreadCrumbComponent } from './Components/bread-crumb/bread-crumb.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';

@NgModule({
  declarations: [LayoutComponent, SideBarComponent, BreadCrumbComponent,  ],
  imports: [ImportsModule, CommonModule, RouterModule,MatToolbarModule],
  exports: [LayoutComponent],
})
export class SharedModule {}
