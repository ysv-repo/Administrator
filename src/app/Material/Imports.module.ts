import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ScrollerModule } from 'primeng/scroller';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



@NgModule({
  exports: [

    //@Angular Imports
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    ToastModule,

    //CkEditor Imports
    CKEditorModule,

    // PrimeNg Imports
    TableModule,
    CalendarModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    DialogModule,
    CardModule,
    PanelModule,
    ButtonModule,
    InputTextareaModule,
    ScrollerModule,
    

    // NgMaterial Imports
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MessageModule,
    MatSortModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatTableExporterModule,
    MatTabsModule,
  ],
})
export class ImportsModule {}
