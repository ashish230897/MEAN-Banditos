import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule, MatIconModule, MatGridListModule, MatExpansionModule, MatFormFieldModule, MatStepperModule, MatButtonModule,
    MatInputModule, MatSelectModule, MatCardModule, MatTabsModule, MatDividerModule, MatDialogModule, MatChipsModule
  ],
  exports: [
    MatToolbarModule, MatIconModule, MatGridListModule, MatExpansionModule, MatFormFieldModule, MatStepperModule, MatButtonModule,
    MatInputModule, MatSelectModule, MatCardModule, MatTabsModule, MatDividerModule, MatDialogModule, MatChipsModule
  ]
})
export class MaterialModule { }
