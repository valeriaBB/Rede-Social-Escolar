import { UsuarioLogado } from './../../usuario/usuario-logado';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable, Subject } from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class ServerService {
  closeResult: string;
  public userLogado: UsuarioLogado;
  URL = "http://localhost:3000/"
  public token: string;
  public user: UsuarioLogado;
  static id_user;
  static tipo;
  constructor(private http: Http, private router: Router) {
    this.token = localStorage.getItem("__token");
  }

  public sair() {
    localStorage.clear();
  }

  public usuarioLogado(id: any, nome: any, email: any, tipo: any) {
    id = JSON.stringify(id);
    nome = JSON.stringify(nome);
    email = JSON.stringify(email);
    ServerService.tipo = tipo;
    ServerService.id_user = id;
    this.userLogado = new UsuarioLogado(id, nome, email, tipo);
  }
  
  public login(objUsuario: any): Observable<any> {
    localStorage.clear();
    return this.http.post(this.URL + 'autenticar', objUsuario)
      .map((res: Response) => {
        this.token = res.headers.get('x-access-token');
        localStorage.setItem("__token", this.token);
        this.user = res.json();
        return res.json();
      });
  }

  public verificaTipo() {
    return this.userLogado.tipo;
  }

  doGet(url) {
    var headers = new Headers();
    headers.append("x-access-token", this.token);
    return this.http.get(this.URL + url, {
      headers: headers
    }).map((res: Response) => res.json());
  }

  doGet2(id, url) {
    var headers = new Headers();
    headers.append("x-access-token", this.token);
    return this.http.get(this.URL + url + id, {
      headers: headers
    }).map((res: Response) => res.json());
  }

  getAny2(id:string, alguem: string) {
    return this.doGet2(id, alguem);
  }

  getAny(alguem: string) {
    return this.doGet(alguem);
  }
  public getEscolas() {
    return this.doGet("escola");
  }
  public getProfessores() {
    return this.doGet("professor");
  }
  public getAlunos() {
    return this.doGet("aluno");
  }
  public getResponsaveis() {
    return this.doGet("responsaveis");
  }

  public remove(componente: any, url: any) {
    var headers = new Headers();
    headers.append("x-access-token", this.token);
    var del = this.http.delete(this.URL + url + componente._id, {
      headers: headers
    });
    return del;
  }

  public salvar(obj, url) {
    event.preventDefault();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append("x-access-token", this.token);
    var method = 'post';
    if (obj['_id'])
      method = 'put';
    return this.http[method](this.URL + url, JSON.stringify(obj), { headers: headers });
  }

  public editar(id: string, url: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append("x-access-token", this.token);
    return this.http.get(this.URL + url + id.toString(), { headers: headers });
  }

  public redirect(tipo: any) {
    switch (tipo) {
      case 1:
        this.router.navigate(['/principal']);
        break;
      case 2:
        this.router.navigate(['/principal']);
        break;
      case 3:
        this.router.navigate(['/principal']);
        break;
      case 4:
        this.router.navigate(['/principal']);
        break;
      default:
        this.router.navigate(['/login']);
    }
  }
}
