import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { IfCompoComponent } from './if-compo/if-compo.component';
import { ParameterRouteComponent } from './parameter-route/parameter-route.component';

import { PipeComponetComponent } from './pipe-componet/pipe-componet.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule } from '@angular/forms';
import { MockApiComponent } from './mock-api/mock-api.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    CalculatorComponent,
    IfCompoComponent,
    ParameterRouteComponent,
    
    PipeComponetComponent,
         TemplateDrivenComponent,
         MockApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
