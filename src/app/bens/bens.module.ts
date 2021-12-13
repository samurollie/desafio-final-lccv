import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BensRoutingModule } from './bens-routing.module';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { IndexComponent } from './components/index/index.component';


@NgModule({
  declarations: [
    CadastroComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    BensRoutingModule
  ]
})
export class BensModule { }
