import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {OnlyAdminUsersGuard} from './admin-user-guard';
import { UsersInfoComponent } from './users-info/users-info.component';
import { MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    UsersInfoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatCheckboxModule
  ],
  providers: [
    OnlyAdminUsersGuard
  ]})
export class AdminModule {}
