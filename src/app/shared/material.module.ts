import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
// CDK
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';
// Material
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

const myModule: any[] | Type<any> | ModuleWithProviders<{}> = [
  // CDK
  A11yModule,
  BidiModule,
  ObserversModule,
  OverlayModule,
  PlatformModule,
  PortalModule,
  CdkStepperModule,
  CdkTableModule,
  CdkTreeModule,
  DragDropModule,
  // Material
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatBottomSheetModule,
  MatTabsModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatIconModule,
  MatMenuModule,
];


@NgModule({
  declarations: [],
  imports: [CommonModule, myModule],
  exports: [myModule],
})
export class MaterialModule {}
