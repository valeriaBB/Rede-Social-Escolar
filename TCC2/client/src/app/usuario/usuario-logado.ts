export class UsuarioLogado {


    public id: string;
    public nome: string;
    public email: string;


    constructor(id: string, nome: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}
