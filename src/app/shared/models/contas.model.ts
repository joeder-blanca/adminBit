export class contasModel {
    public id!: number;
    public id_empresa!: number;
    public id_pessoa_inc!: number;
    public dt_inc!: Date;
    public nome!: string;
    public  status!: string;

    public mapFromApi(item: any): contasModel {
        this.id = item.id;
        this.id_empresa = item.id_empresa;
        this.id_pessoa_inc = item.id_pessoa_inc;
        this.dt_inc = new Date(item.dt_inc);
        this.nome = item.nome;
        this.status = item.status;
        return this;
    }
}
