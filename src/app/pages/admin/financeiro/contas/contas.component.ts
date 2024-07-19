import { Component } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent {

  totalContas = 0;
  receberPendente = 0;
  pagarPendente = 0;
  saldoPendente = 0;

  listContas: any = [];

  ngOnInit(): void {
    this.obterTotais();
    this.obterContas();
    
  }

  ///funções

  obterTotais(){
    this.totalContas = 1500;
    this.receberPendente = 750;
    this.pagarPendente = 750;
    this.saldoPendente = this.receberPendente - this.pagarPendente;
  }

  obterContas(){
    const listFake = [
      {
          "Id": 1,
          "Descricao": "Energia Elétrica",
          "Status": "Pendente",
          "Categoria": "Despesa Fixa",
          "Valor": 150.00,
          "Vencimento": "2024-07-31"
      },
      {
          "Id": 2,
          "Descricao": "Internet",
          "Status": "Pago",
          "Categoria": "Despesa Fixa",
          "Valor": 100.00,
          "Vencimento": "2024-07-20"
      },
      {
          "Id": 3,
          "Descricao": "Água",
          "Status": "Pendente",
          "Categoria": "Despesa Fixa",
          "Valor": 60.00,
          "Vencimento": "2024-07-25"
      },
      {
          "Id": 4,
          "Descricao": "Manutenção do Computador",
          "Status": "Pago",
          "Categoria": "Despesa Variável",
          "Valor": 250.00,
          "Vencimento": "2024-07-15"
      },
      {
          "Id": 5,
          "Descricao": "Assinatura de Software",
          "Status": "Pendente",
          "Categoria": "Despesa Fixa",
          "Valor": 80.00,
          "Vencimento": "2024-07-30"
      },
      {
          "Id": 6,
          "Descricao": "Aluguel do Escritório",
          "Status": "Pago",
          "Categoria": "Despesa Fixa",
          "Valor": 1200.00,
          "Vencimento": "2024-08-01"
      },
      {
          "Id": 7,
          "Descricao": "Venda de Produtos",
          "Status": "Recebido",
          "Categoria": "Receita Variável",
          "Valor": 5000.00,
          "Vencimento": "2024-07-10"
      },
      {
          "Id": 8,
          "Descricao": "Consultoria",
          "Status": "Recebido",
          "Categoria": "Receita Variável",
          "Valor": 2000.00,
          "Vencimento": "2024-07-05"
      },
      {
          "Id": 9,
          "Descricao": "Serviços Prestados",
          "Status": "Recebido",
          "Categoria": "Receita Variável",
          "Valor": 1500.00,
          "Vencimento": "2024-07-15"
      },
      {
          "Id": 10,
          "Descricao": "Investimento",
          "Status": "Recebido",
          "Categoria": "Receita Extraordinária",
          "Valor": 3000.00,
          "Vencimento": "2024-07-25"
      },
      {
          "Id": 11,
          "Descricao": "Patrocínio",
          "Status": "Recebido",
          "Categoria": "Receita Extraordinária",
          "Valor": 1000.00,
          "Vencimento": "2024-07-20"
      }
  ]
    this.listContas = listFake;
  }

  formatDate(date: any): string {
    return moment(date).format('DD/MM/YYYY');
  }

  formatMoeda(valor: any): string {
    return  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

}
