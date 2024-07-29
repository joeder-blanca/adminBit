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
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

  date = null;
  isEnglish = false;
  visible = false;
  visibleMenu = false;
  visibleNovoFinanceiro = false;
  searchForm!: FormGroup;
  periodoFiltro: string = 'Mês: Junho'

  vrReceitas: string = '';

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

    //     if(entry.tipo == "1"){
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

      if(entry.tipo == "1"){
        totalReceitas += parseFloat(entry.total);
      }
    });
    this.vrReceitas = totalReceitas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  obterFinanceiros() {
    this._adminApi.getFinanceiros()
      .then(data => {
        this.listFinanceiros = data.map((item: any) => new financeirosModel().mapFromApi(item));
        const filteredFinanceiros = this.listFinanceiros.filter((entry: financeirosModel) => entry.Tipo == 'E');
        this.listFinanceiros = filteredFinanceiros;
        
        this.vrReceitas = filteredFinanceiros.reduce((total: number, entry: financeirosModel) => total + entry.Valor, 0);
      })
      .catch(error => {
        console.error('Erro ao obter financeiros:', error);
      });
  }
  
  onFinanceiroAdded(): void {
    this.obterFinanceiros();
  }

  formatDate(date: any): string {
    return moment(date).format('DD/MM/YYYY');
  }

  formatMoeda(valor: any): string {
    let numericValue = typeof valor === 'string' ? parseFloat(valor) : valor;
  
    if (isNaN(numericValue)) {
      return 'R$ 0,00';
    }
  
    return numericValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
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
