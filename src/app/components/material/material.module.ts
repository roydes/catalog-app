import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatGridListModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  exports: [
    MatSidenavModule,
    MatGridListModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  declarations: []
})
export class MaterialModule { }
