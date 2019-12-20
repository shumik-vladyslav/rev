import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatToolbarModule,
  MatMenuModule,
  MatTabsModule,
  MatDividerModule,
  MatCardModule,
  MatListModule,
  MatExpansionModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatTreeModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCheckboxModule
} from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogParametersComponent } from './components/dialog-parameters/dialog-parameters.component';
import { DialogCreateModelComponent } from './components/dialog-create-model/dialog-create-model.component';
import { FiltrListParamPipe } from './pipes/filtr-list-param.pipe';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatTreeModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatTooltipModule
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatTreeModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatTooltipModule,
    PlayerComponent
  ],
  entryComponents: [DialogParametersComponent, DialogCreateModelComponent],
  declarations: [DialogParametersComponent, DialogCreateModelComponent, FiltrListParamPipe, ClickOutsideDirective, PlayerComponent],
})
export class SharedModule { }
