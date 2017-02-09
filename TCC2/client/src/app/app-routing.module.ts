import { EmpresaComponent } from './empresa/empresa.component';
import { CadastroempresaComponent } from './cadastroempresa/cadastroempresa.component';

import { EscolaComponent } from './escola/escola.component';
import { CadastroescolaComponent } from './cadastroescola/cadastroescola.component';


import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'empresa',
    component: EmpresaComponent
  },
  {
    path: 'cadastroempresa',
    component: CadastroempresaComponent
  },
  {
    path: 'cadastroempresa/:id',
    component: CadastroempresaComponent
  },
  {
    path: 'escola',
    component: EscolaComponent
  },
  {
    path: 'cadastroescola',
    component: CadastroescolaComponent
  },
  {
    path: 'cadastroescola/:id',
    component: CadastroescolaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
