import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ImportsModule } from './Material/Imports.module';
import { AuthModule } from './Modules/auth/auth.module';
import { SharedModule } from './Modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomcomponentsModule } from './Modules/customcomponents/customcomponents.module';
import { MatTableExporterModule } from 'mat-table-exporter';

@NgModule({
  declarations: [AppComponent ],
  imports: [
    ImportsModule,
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    MatTableModule,
    AuthModule,
    MessageModule,
    MessagesModule,
    NgbModule,
    CustomcomponentsModule,
    MatTableExporterModule


  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
