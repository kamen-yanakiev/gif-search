import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { McfInputModule } from '@accelya/sdk/mcf-input';
import { McfButtonModule } from '@accelya/sdk/mcf-button';

const SdkModules = [
  McfInputModule,
  McfButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    ...SdkModules
  ],
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent,
    ...SdkModules
  ]
})
export class SharedModule { }
