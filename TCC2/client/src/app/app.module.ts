import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AlertModule } from 'ng2-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ServerService } from './services/server/server.service';
import { HeaderComponent } from './header/header.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { CadastroempresaComponent } from './cadastros/cadastroempresa/cadastroempresa.component';
import { EmpresaPipe } from './pipes/empresa.pipe';
import { EscolaComponent } from './escola/escola.component';
import { CadastroescolaComponent } from './cadastros/cadastroescola/cadastroescola.component';
import { EscolaPipe } from './pipes/escola.pipe';
import { CadastrousuarioComponent } from './cadastros/cadastrousuario/cadastrousuario.component';
import { UsuarioPipe } from './pipes/usuario.pipe';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { CadastrodisciplinaComponent } from './cadastros/cadastrodisciplina/cadastrodisciplina.component';
import { TurmaComponent } from './turma/turma.component';
import { CadastroturmaComponent } from './cadastros/cadastroturma/cadastroturma.component';
import { AlunoComponent } from './aluno/aluno.component';
import { CadastroalunoComponent } from './cadastros/cadastroaluno/cadastroaluno.component';
import { EnqueteComponent } from './enquete/enquete.component';
import { CadastroenqueteComponent } from './cadastros/cadastroenquete/cadastroenquete.component';
import { ProfessorComponent } from './professor/professor.component';
import { CadastroprofessorComponent } from './cadastros/cadastroprofessor/cadastroprofessor.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { CadastroquestionarioComponent } from './cadastros/cadastroquestionario/cadastroquestionario.component';
import { CadastroresponsavelComponent } from './cadastros/cadastroresponsavel/cadastroresponsavel.component';
import { ResponsavelComponent } from './responsavel/responsavel.component';
import { TurmaPipe } from './pipes/turma.pipe';
import { ResponsavelPipe } from './pipes/responsavel.pipe';
import { QuestionarioPipe } from './pipes/questionario.pipe';
import { ProfessorPipe } from './pipes/professor.pipe';
import { EnquetePipe } from './pipes/enquete.pipe';
import { DisciplinaPipe } from './pipes/disciplina.pipe';
import { AlunoPipe } from './pipes/aluno.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    HeaderComponent,
    EmpresaComponent,
    CadastroempresaComponent,
    EmpresaPipe,
    EscolaComponent,
    CadastroescolaComponent,
    EscolaPipe,
    CadastrousuarioComponent,
    UsuarioPipe,
    DisciplinaComponent,
    CadastrodisciplinaComponent,
    TurmaComponent,
    CadastroturmaComponent,
    AlunoComponent,
    CadastroalunoComponent,
    EnqueteComponent,
    CadastroenqueteComponent,
    ProfessorComponent,
    CadastroprofessorComponent,
    QuestionarioComponent,
    CadastroquestionarioComponent,
    CadastroresponsavelComponent,
    ResponsavelComponent,
    TurmaPipe,
    ResponsavelPipe,
    QuestionarioPipe,
    ProfessorPipe,
    EnquetePipe,
    DisciplinaPipe,
    AlunoPipe
 
 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    TextMaskModule
  ],
  providers: [ServerService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
