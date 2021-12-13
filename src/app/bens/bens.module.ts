import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BensRoutingModule } from './bens-routing.module';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { IndexComponent } from './components/index/index.component';
import { VisualizarComponent } from './components/visualizar/visualizar.component';
import { BensComponent } from './components/index/tabs/bens/bens.component';
import { ObsComponent } from './components/index/tabs/obs/obs.component';
import { GeralComponent } from './components/index/tabs/geral/geral.component';


@NgModule({
  declarations: [
    CadastroComponent,
    IndexComponent,
    VisualizarComponent,
    GeralComponent,
    BensComponent,
    ObsComponent
  ],
  imports: [
    CommonModule,
    BensRoutingModule
  ]
})
export class BensModule { }
