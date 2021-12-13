import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

const routes: Routes = [
  {
    path: 'bens',
    loadChildren: () => import('./bens/bens.module').then((m) => m.BensModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgxBootstrapIconsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
