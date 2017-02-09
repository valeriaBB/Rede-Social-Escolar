import { UsuarioLogado } from './../../usuario/usuario-logado';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable, Subject } from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';



@Injectable()
export class ServerService {

  closeResult: string;

  URL = "http://localhost:3000/"

  public token: string;
  public user: UsuarioLogado;
  constructor(private http: Http, private router: Router) {
    this.token = localStorage.getItem("__token");

  }

  public sair() {
    localStorage.clear();
  }

  public usuarioLogado(id: any, nome: any, email: any) {

    id = JSON.stringify(id);
    nome = JSON.stringify(nome);
    email = JSON.stringify(email);

    var usuarioLogado = new UsuarioLogado(id, nome, email);

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

  doGet(url) {
    var headers = new Headers();
    headers.append("x-access-token", this.token);

    return this.http.get(this.URL + url, {
      headers: headers
    }).map((res: Response) => res.json());
  }

  public getEmpresas() {
    return this.doGet("empresa");
  }

   public getEscolas() {
    return this.doGet("escola");
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
        this.router.navigate(['/escola']);
        break;
      case 2:
        this.router.navigate(['/empresa']);
        break;
      case 3:
        this.router.navigate(['/colaborador']);
        break;
      case 4:
        this.router.navigate(['/ponto']);
        break;
      default:
        this.router.navigate(['/login']);
    }
  }



}
