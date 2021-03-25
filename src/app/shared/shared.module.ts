import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';

import { McfInputModule } from '@accelya/sdk/mcf-input';
import { McfButtonModule } from '@accelya/sdk/mcf-button';
import { McfModalModule } from '@accelya/sdk/mcf-modal';

const SdkModules = [
  McfInputModule,
  McfButtonModule,
  McfModalModule
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
