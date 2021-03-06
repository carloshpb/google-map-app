import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LeafletComponent } from './leaflet/leaflet.component';
import { OpenlayersComponent } from './openlayers/openlayers.component';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "leaf",
    pathMatch: "full",
  },
  {
    path: "leaf",
    component: LeafletComponent,
  },
  {
    path: "open",
    component: OpenlayersComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
