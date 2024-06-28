export class financeirosModel {
    public data!: Date;
    public id_sf!: number;
    public if_pessoa_inc!: number;
    public id_pessoa_origem!: number;
    public id_empresa!: number;
    public id_f_pgto!: number;
    public id_intervalo!: number;
    public id_metodo!: number;
    public id_conta!: number;
    public id_categoria!: number;
    public tipo!: string;
    public pessoa!: string;
    public origem!: string;
    public categoria!: string;
    public conta!: string;
    public descricao!: string;
    public observacao!: string;
    public tipoNome!: string;
    public valor!: number;

    public mapFromApi(item: any): financeirosModel {
        this.data = item.data;
        this.id_sf = item.id_sf;
        this.if_pessoa_inc = item.if_pessoa_inc;
        this.id_pessoa_origem = item.id_pessoa_origem;
        this.id_empresa = item.id_empresa;
        this.id_f_pgto = item.id_f_pgto;
        this.id_intervalo = item.id_intervalo;
        this.id_metodo = item.id_metodo;
        this.id_conta = item.id_conta;
        this.id_categoria = item.id_categoria;
        this.tipo = item.tipo;
        this.pessoa = item.pessoa;
        this.origem = item.origem;
        this.categoria = item.categoria;
        this.conta = item.conta;
        this.descricao = item.descricao;
        this.observacao = item.observacao;
        this.tipoNome = item.tipoNome;
        this.valor = item.valor;

        return this;
    }
}
