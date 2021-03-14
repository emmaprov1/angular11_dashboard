import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AdminRoutingModule } from './admin.routing.module';
import { AdminComponent } from './Pages';
import { SidebarComponent, FooterComponent, HeaderComponent, MobileSidebarComponent,MobileHeaderComponent  } from '../../Shared/Layout';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ AdminComponent, MobileSidebarComponent,MobileHeaderComponent, SidebarComponent, FooterComponent, HeaderComponent],
  imports: [
    AdminRoutingModule,
    CommonModule
  ],
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class AdminModule { }
 