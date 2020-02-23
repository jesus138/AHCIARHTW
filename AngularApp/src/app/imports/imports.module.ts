import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatSliderModule,
  MatTableModule, MatTabsModule, MatDialogModule, MatSnackBarModule, MatInputModule,
  MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatMenuModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatSliderModule,
  MatTableModule, MatTabsModule, MatDialogModule, MatSnackBarModule, MatInputModule,
  MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatMenuModule
  ]
})
export class ImportsModule { }
