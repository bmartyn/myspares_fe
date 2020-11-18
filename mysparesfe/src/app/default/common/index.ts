import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'; 

import {ComponentsModule} from '../shared/components/index';
import {SharedModule} from '../shared/shared.module';
import {LayoutContainerComponent} from './layout/layout.container';




export const CONTAINERS = {
    LayoutContainerComponent
};
@NgModule({
  imports: [
      CommonModule,
      ComponentsModule,
      SharedModule,
  ],
  declarations: [LayoutContainerComponent],
  providers: []
})
export class ContainerModule {
}
