export class financeirosModel {
    public Id!: number;
    public UserIncId!: number;
    public PessoaOrigemId!: number;
    public EmpresaId!: number;
    public FormaId!: number;
    public IntervaloId!: number;
    public MetodoId!: number;
    public ContaId!: number;
    public CategoriaId!: number;
    public Tipo!: string;
    public NomePessoaOrigem!: string;
    public NomeOrigem!: string;
    public NomeCategoria!: string;
    public NomeConta!: string;
    public NomeTipo!: string;
    public Descricao!: string;
    public Obs!: string;
    public Valor!: number;

    public mapFromApi(item: any): financeirosModel {
        this.Id = item.Id;
        this.UserIncId = item.UserIncId;
        this.PessoaOrigemId = item.PessoaOrigemId;
        this.EmpresaId = item.EmpresaId;
        this.FormaId = item.FormaId;
        this.IntervaloId = item.IntervaloId;
        this.MetodoId = item.MetodoId;
        this.ContaId = item.ContaId;
        this.CategoriaId = item.CategoriaId;
        this.Tipo = item.Tipo;
        this.NomePessoaOrigem = item.NomePessoaOrigem;
        this.NomeOrigem = item.NomeOrigem;
        this.NomeCategoria = item.NomeCategoria;
        this.NomeConta = item.NomeConta;
        this.NomeTipo = item.NomeTipo;
        this.Descricao = item.Descricao;
        this.Obs = item.Obs;
        this.Valor = item.Valor;

        return this;
    }
}
