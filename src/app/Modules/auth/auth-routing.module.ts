import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageService } from 'primeng/api';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    MessageService
  ]
})
export class AuthRoutingModule {}
