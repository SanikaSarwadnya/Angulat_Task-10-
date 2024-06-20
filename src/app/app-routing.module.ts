import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { IfCompoComponent } from './if-compo/if-compo.component';
import { ParameterRouteComponent } from './parameter-route/parameter-route.component';
import { PipeComponetComponent } from './pipe-componet/pipe-componet.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [

  {
    path:'user',component:UserProfileComponent
  },
  {
    path:'cal',component:CalculatorComponent
  },
  {
    path:'if',component:IfCompoComponent
  },
  {
    path:'pararoute',component:ParameterRouteComponent
  },
  {
    path:'pipe',component:PipeComponetComponent
  },
  {
    path:'template',component:TemplateDrivenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
