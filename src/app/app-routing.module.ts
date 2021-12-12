import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';



const routes: Routes = [
  {
    path: 'cadastrar',
    component: CadastroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgxBootstrapIconsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
