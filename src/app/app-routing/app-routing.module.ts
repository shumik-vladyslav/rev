import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { HomeComponent } from '../home/home.component';
import { ModelListComponent } from '../model-list/model-list.component';
import { ModelMainComponent } from '../model-main/model-main.component';

const routes: Routes = [{
  path: '',
  component: ModelListComponent
},{
  path: 'model-list',
  component: ModelListComponent
},{
  path: 'model',
  component: ModelMainComponent
},{
  path: 'model/:id',
  component: ModelMainComponent
}, {
  path: 'auth',
  loadChildren: 'app/auth/auth.module#AuthModule'
}, {
  path: 'admin',
  loadChildren: 'app/admin/admin.module#AdminModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
  declarations: []
})

export class AppRoutingModule {}
