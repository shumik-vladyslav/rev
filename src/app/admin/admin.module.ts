import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {OnlyAdminUsersGuard} from './admin-user-guard';
import { UsersInfoComponent } from './users-info/users-info.component';

@NgModule({
  declarations: [
    AdminComponent,
    UsersInfoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  providers: [
    OnlyAdminUsersGuard
  ]})
export class AdminModule {}
