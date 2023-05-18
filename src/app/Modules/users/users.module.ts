import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ImportsModule } from 'src/app/Material/Imports.module';
import { CustomcomponentsModule } from "../customcomponents/customcomponents.module";
import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { InlinetableComponent } from './inlinetable/inlinetable.component';


@NgModule({
    declarations: [UsersComponent, InlinetableComponent, ],
    imports: [ImportsModule, CommonModule, UsersRoutingModule, CustomcomponentsModule,SharedModule]
})
export class UsersModule {}
