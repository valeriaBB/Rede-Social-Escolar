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
import { CadastroempresaComponent } from './cadastroempresa/cadastroempresa.component';
import { EmpresaPipe } from './pipes/empresa.pipe';
import { EscolaComponent } from './escola/escola.component';
import { CadastroescolaComponent } from './cadastroescola/cadastroescola.component';
import { EscolaPipe } from './pipes/escola.pipe';


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
    EscolaPipe
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  providers: [ServerService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
