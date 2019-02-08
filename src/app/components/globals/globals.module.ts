import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MenuComponent } from './menu/menu.component';
import { NotImplementedComponent } from './not-implemented/not-implemented.component';

import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    ToolbarComponent,
    SidenavComponent,
    MenuComponent,
    NotImplementedComponent
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent,
    MenuComponent,
    NotImplementedComponent
  ]
})
export class GlobalsModule { }
