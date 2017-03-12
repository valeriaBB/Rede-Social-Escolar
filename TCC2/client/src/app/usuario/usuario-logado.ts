export class UsuarioLogado {


    public id: string;
    public nome: string;
    public email: string;
    public tipo: number;


    constructor(id: string, nome: string, email: string, tipo: number) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.tipo = tipo;
    }
}
