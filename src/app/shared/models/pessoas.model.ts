export class pessoasModel {
    public id!: number;
    public id_pessoa_tipo!: number;
    public id_empresa!: number;
    public nome!: string;
    public apelido!: string;
    public email!: string;
    public cidade!: string;
    public cep!: string;
    public contato!: string;
    public estado!: string;
    public idade!: number;
    public status!: string;
    public dt_inc!: Date;

    public mapFromApi(item: any): pessoasModel {
        this.id = item.id;
        this.id_pessoa_tipo = item.id_pessoa_tipo;
        this.id_empresa = item.id_empresa;
        this.nome = item.nome;
        this.apelido = item.apelido;
        this.email = item.email;
        this.cidade = item.cidade;
        this.cep = item.cep;
        this.contato = item.contato;
        this.estado = item.estado;
        this.idade = item.idade;
        this.status = item.status;
        this.dt_inc = new Date(item.dt_inc);
        return this;
    }
}
