import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImportsModule } from 'src/app/Material/Imports.module';
import { ConfirmationdialogComponent } from './confirmationdialog/confirmationdialog.component';

@NgModule({
  declarations: [ConfirmationdialogComponent],
  imports: [CommonModule,ImportsModule],
  exports: [ConfirmationdialogComponent]
})
export class CustomcomponentsModule {}
