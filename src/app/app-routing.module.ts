import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { PorSubRegionComponent } from './pais/pages/por-sub-region/por-sub-region.component';

const routes: Routes = [
{path:'',component:PorPaisComponent,pathMatch:'full'},
{path:'region',component:PorRegionComponent},
{path:'subregion',component:PorSubRegionComponent},
{path:'capital',component:PorCapitalComponent},
{path:'pais/:id',component:VerPaisComponent},
{path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
