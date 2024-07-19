import { Component, OnInit } from '@angular/core';
import { getISOWeek } from 'date-fns';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import { NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import { adminApiProvider } from 'src/app/shared/services/admin.service';
import { totaisModel } from 'src/app/shared/models/totais.model';
import { financeirosModel } from 'src/app/shared/models/financeiros.model';
import * as moment from 'moment';


interface DataItem {
  codigo: number;
  nome: string;
  data: string;
  conta: string;
  categoria: string;
  valor: number;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<DataItem> | null;
  sortDirections: NzTableSortOrder[];
}

@Component({
  selector: 'app-despresa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.css']
})
export class DespesaComponent implements OnInit {

  date = null;
  isEnglish = false;
  visible = false;
  visibleMenu = false;
  visibleNovoFinanceiro = false;
  searchForm!: FormGroup;
  periodoFiltro: string = 'Mês: Junho'

  vrDespesa: string = '';

  listTotais:any = [];
  listFinanceiros:any = [];

  listOfColumns: ColumnItem[] = [
    {
      name: 'Cod.',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.codigo - b.codigo,
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Nome',
      sortOrder: 'descend',
      sortFn: (a: DataItem, b: DataItem) => a.nome.localeCompare(b.nome),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Data',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => new Date(a.data).getTime() - new Date(b.data).getTime(),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Conta',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.conta.localeCompare(b.conta),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Categoria',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.categoria.localeCompare(b.categoria),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Valor',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.valor - b.valor,
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Ações',
      sortOrder: null,
      sortFn: null,
      sortDirections: ['ascend', 'descend', null],
    }
  ];

  constructor(
    private i18n: NzI18nService,
    private _fb: FormBuilder,
    public _adminApi : adminApiProvider
  ) {}
  ngOnInit(): void {
    this.searchForm = this._fb.group({
      dataDe: [null],
      dataAte: [null],
      pessoa: [null],
      conta: [null],
      categoria: [null]
    });
    this.obterTotais();
    this.obterFinanceiros();
  }

  obterTotais(){
    let totalReceitas = 0;

    // this._adminApi.getTotais()
    // .then(data => {
    //   this.listTotais = data;
    //   this.listTotais.forEach((entry: totaisModel) =>{

    //     if(entry.tipo == "2"){
    //       totalReceitas += parseFloat(entry.total);
    //     }
    //   });
    //   this.vrReceitas = totalReceitas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    // })

    const dados = [
      {
        data: '01/01/2024',
        tipo: '1',
        total: 1500
      },
      {
        data: '01/01/2024',
        tipo: '2',
        total: 2500
      }
    ];

    this.listTotais = dados;
    this.listTotais.forEach((entry: totaisModel) =>{

      if(entry.tipo == "2"){
        totalReceitas += parseFloat(entry.total);
      }
    });
    this.vrDespesa = totalReceitas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  obterFinanceiros() {
    // this._adminApi.getFinanceiros()
    //   .then(data => {
    //     this.listFinanceiros = data.map((item: any) => new financeirosModel().mapFromApi(item));
    //             const filteredFinanceiros = this.listFinanceiros.filter((entry: financeirosModel) => entry.Tipo == '2');

    //     this.listFinanceiros = filteredFinanceiros;
    //   })
    //   .catch(error => {
    //     console.error('Erro ao obter financeiros:', error);
    //   });

      const dados = [
        {
            "Id": 1,
            "UserIncId": 101,
            "PessoaOrigemId": 202,
            "EmpresaId": 303,
            "FormaId": 404,
            "IntervaloId": 505,
            "MetodoId": 606,
            "ContaId": 707,
            "CategoriaId": 808,
            "Tipo": "2",
            "NomePessoaOrigem": "João Silva",
            "NomeOrigem": "Empresa ABC",
            "NomeCategoria": "Alimentação",
            "NomeConta": "Conta Corrente",
            "NomeTipo": "Compras",
            "Descricao": "Compra de alimentos para o escritório.",
            "Obs": "Despesas do mês de julho.",
            "Valor": 150.75
        },
        {
            "Id": 2,
            "UserIncId": 102,
            "PessoaOrigemId": 203,
            "EmpresaId": 304,
            "FormaId": 405,
            "IntervaloId": 506,
            "MetodoId": 607,
            "ContaId": 708,
            "CategoriaId": 809,
            "Tipo": "1",
            "NomePessoaOrigem": "Maria Oliveira",
            "NomeOrigem": "Empresa XYZ",
            "NomeCategoria": "Venda",
            "NomeConta": "Conta de Investimentos",
            "NomeTipo": "Serviços",
            "Descricao": "Venda de serviços de consultoria.",
            "Obs": "Receita referente ao projeto de consultoria.",
            "Valor": 1200.00
        },
        {
            "Id": 3,
            "UserIncId": 103,
            "PessoaOrigemId": 204,
            "EmpresaId": 305,
            "FormaId": 406,
            "IntervaloId": 507,
            "MetodoId": 608,
            "ContaId": 709,
            "CategoriaId": 810,
            "Tipo": "2",
            "NomePessoaOrigem": "Carlos Santos",
            "NomeOrigem": "Loja MNO",
            "NomeCategoria": "Transporte",
            "NomeConta": "Conta Poupança",
            "NomeTipo": "Combustível",
            "Descricao": "Gasto com combustível para a frota.",
            "Obs": "Despesas de transporte do mês.",
            "Valor": 320.40
        },
        {
            "Id": 4,
            "UserIncId": 104,
            "PessoaOrigemId": 205,
            "EmpresaId": 306,
            "FormaId": 407,
            "IntervaloId": 508,
            "MetodoId": 609,
            "ContaId": 710,
            "CategoriaId": 811,
            "Tipo": "1",
            "NomePessoaOrigem": "Ana Pereira",
            "NomeOrigem": "Freelancer",
            "NomeCategoria": "Consultoria",
            "NomeConta": "Conta Empresarial",
            "NomeTipo": "Projetos",
            "Descricao": "Consultoria para projeto de TI.",
            "Obs": "Pagamento por serviços de consultoria.",
            "Valor": 5000.00
        },
        {
            "Id": 5,
            "UserIncId": 105,
            "PessoaOrigemId": 206,
            "EmpresaId": 307,
            "FormaId": 408,
            "IntervaloId": 509,
            "MetodoId": 610,
            "ContaId": 711,
            "CategoriaId": 812,
            "Tipo": "2",
            "NomePessoaOrigem": "Fernanda Lima",
            "NomeOrigem": "Hotel XYZ",
            "NomeCategoria": "Hospedagem",
            "NomeConta": "Conta de Viagem",
            "NomeTipo": "Diárias",
            "Descricao": "Hospedagem durante viagem de negócios.",
            "Obs": "Despesas de hospedagem para evento corporativo.",
            "Valor": 980.00
        }
    ]
    

      this.listFinanceiros = dados.map((item: any) => new financeirosModel().mapFromApi(item));
      const filteredFinanceiros = this.listFinanceiros.filter((entry: financeirosModel) => entry.Tipo == '2');
    
      this.listFinanceiros = filteredFinanceiros;
  }

  formatDate(date: any): string {
    return moment(date).format('DD/MM/YYYY');
  }

  formatMoeda(valor: any): string {
    return  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  abrirNovoFinanceiro(){
    this.visibleMenu = false;
    this.visibleNovoFinanceiro = true;
  }

  abrirMenu(){
    this.visibleMenu = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.visibleMenu = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.visibleMenu = false;
  }


}
