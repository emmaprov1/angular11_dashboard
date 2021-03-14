
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule} from './Interfaces/Admin/admin.module';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './../app/Core/Reducers/todoReducer';
import { metaReducers } from './../app/Core/Reducers/index';
import { todoService } from './../app/Core/Services';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './Core/Effect/todoEffect';
import { HttpClientModule } from '@angular/common/http'; 
import { ChartsModule } from 'ng2-charts'; 
import { DashboardComponent } from './Interfaces/Admin/Pages/Dashboard/dashboard.component';
import { sidebarReducer } from './Core/Reducers/sidebarReducer';
 



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('todos', [todoReducer], { metaReducers }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([TodosEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientModule, 
    ChartsModule
  ], 
  providers: [todoService],
  bootstrap: [AppComponent],
  schemas: [  CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
