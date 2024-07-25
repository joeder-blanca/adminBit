import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';



@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent {
  periodoFiltro: string = 'Julho';
  listVendas= [
    {
      Id: 1,
      PessoaOrigemId: 'João da Silva',
      Data: '2024-12-01',
      Valor: 312.00
    },
    {
      Id: 2,
      PessoaOrigemId: 'Maria Oliveira',
      Data: '2024-12-01',
      Valor: 150.50
    },
    {
      Id: 3,
      PessoaOrigemId: 'Carlos Pereira',
      Data: '2024-12-01',
      Valor: 420.00
    },
    {
      Id: 4,
      PessoaOrigemId: 'Ana Souza',
      Data: '2024-12-01',
      Valor: 80.75
    },
    {
      Id: 5,
      PessoaOrigemId: 'Paulo Santos',
      Data: '2024-12-01',
      Valor: 220.40
    },
    {
      Id: 6,
      PessoaOrigemId: 'Fernanda Lima',
      Data: '2024-12-01',
      Valor: 360.90
    },
    {
      Id: 7,
      PessoaOrigemId: 'Ricardo Mendes',
      Data: '2024-12-01',
      Valor: 512.00
    },
    {
      Id: 8,
      PessoaOrigemId: 'Patrícia Almeida',
      Data: '2024-12-01',
      Valor: 180.00
    },
    {
      Id: 9,
      PessoaOrigemId: 'Roberto Farias',
      Data: '2024-12-01',
      Valor: 275.25
    },
    {
      Id: 10,
      PessoaOrigemId: 'Beatriz Castro',
      Data: '2024-12-01',
      Valor: 310.00
    },
    {
      Id: 11,
      PessoaOrigemId: 'Luiz Henrique',
      Data: '2024-12-01',
      Valor: 490.80
    }
  ]
  
  vrVendas:string = '';
  visibleFiltro: boolean = false;

  searchForm!: FormGroup;

  constructor(
    private _fb: FormBuilder
  ){
    this.searchForm = this._fb.group({
      //delacarar campos do formulário
    })
  }

  ngOnInit(): void {
    this.sumTotal();
  }

  sumTotal(): void {
    const v = this.listVendas.reduce((total, compra) => total + compra.Valor, 0);

    this.vrVendas = this.formatMoeda(v);
  }


  openMenu(){


  }


  openFilter(){


  }

  closeFilter(){

  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  formatDate(date: any): string {
    return moment(date).format('DD/MM/YYYY');
  }

  formatMoeda(valor: any): string {
    return  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

}
