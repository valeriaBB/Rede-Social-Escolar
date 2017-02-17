import { EmpresaComponent } from './empresa/empresa.component';
import { CadastroempresaComponent } from './cadastros/cadastroempresa/cadastroempresa.component';

import { EscolaComponent } from './escola/escola.component';
import { CadastroescolaComponent } from './cadastros/cadastroescola/cadastroescola.component';

import { ProfessorComponent } from './professor/professor.component';
import { CadastroprofessorComponent } from './cadastros/cadastroprofessor/cadastroprofessor.component';

import { AlunoComponent } from './aluno/aluno.component';
import { CadastroalunoComponent } from './cadastros/cadastroaluno/cadastroaluno.component';

import { ResponsavelComponent } from './responsavel/responsavel.component';
import { CadastroresponsavelComponent } from './cadastros/cadastroresponsavel/cadastroresponsavel.component';

import { DisciplinaComponent } from './disciplina/disciplina.component';
import { CadastrodisciplinaComponent } from './cadastros/cadastrodisciplina/cadastrodisciplina.component';

import { TurmaComponent } from './turma/turma.component';
import { CadastroturmaComponent } from './cadastros/cadastroturma/cadastroturma.component';

import { EnqueteComponent } from './enquete/enquete.component';
import { CadastroenqueteComponent } from './cadastros/cadastroenquete/cadastroenquete.component';

import { QuestionarioComponent } from './questionario/questionario.component';
import { CadastroquestionarioComponent } from './cadastros/cadastroquestionario/cadastroquestionario.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { CadastrousuarioComponent } from './cadastros/cadastrousuario/cadastrousuario.component';


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
  },
  {
    path: 'professor',
    component: ProfessorComponent
  },
  {
    path: 'cadastroprofessor',
    component: CadastroprofessorComponent
  },
  {
    path: 'cadastroprofessor/:id',
    component: CadastroprofessorComponent
  },
  {
    path: 'aluno',
    component: AlunoComponent
  },
  {
    path: 'cadastroaluno',
    component: CadastroalunoComponent
  },
  {
    path: 'cadastroaluno/:id',
    component: CadastroalunoComponent
  },
  {
    path: 'responsavel',
    component: ResponsavelComponent
  },
  {
    path: 'cadastroresponsavel',
    component: CadastroresponsavelComponent
  },
  {
    path: 'cadastroresponsavel/:id',
    component: CadastroresponsavelComponent
  },
  {
    path: 'disciplina',
    component: DisciplinaComponent
  },
  {
    path: 'cadastrodisciplina',
    component: CadastrodisciplinaComponent
  },
  {
    path: 'cadastrodisciplina/:id',
    component: CadastrodisciplinaComponent
  },
  {
    path: 'turma',
    component: TurmaComponent
  },
  {
    path: 'cadastroturma',
    component: CadastroturmaComponent
  },
  {
    path: 'cadastroturma/:id',
    component: CadastroturmaComponent
  },
  {
    path: 'enquete',
    component: EnqueteComponent
  },
  {
    path: 'cadastroenquete',
    component: CadastroenqueteComponent
  },
  {
    path: 'cadastroenquete/:id',
    component: CadastroenqueteComponent
  },
  {
    path: 'questionario',
    component: QuestionarioComponent
  },
  {
    path: 'cadastroquestionario',
    component: CadastroquestionarioComponent
  },
  {
    path: 'cadastroquestionario/:id',
    component: CadastroquestionarioComponent
  },
  {
    path: 'usuario',
    component: UsuarioComponent
  },
  {
    path: 'cadastrousuario',
    component: CadastrousuarioComponent
  },
  {
    path: 'cadastrousuario/:id',
    component: CadastrousuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
