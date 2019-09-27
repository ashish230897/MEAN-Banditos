import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule, 
    MatGridListModule, 
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    MatToolbarModule, 
    MatIconModule,
    MatGridListModule, 
    MatExpansionModule, 
    MatStepperModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class MaterialModule { }
