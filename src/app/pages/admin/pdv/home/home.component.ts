import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  caixasAbertos = 1

  listCaixas = [
    {
      Id: 1,
      OperadorNome: 'Bruno da Silva',
      Valor: 1765.12,
      DataAbertura: '2024-05-19',
      Status: 'Fechado'
    },
    {
      Id: 2,
      OperadorNome: 'Maria Oliveira',
      Valor: 2020.75,
      DataAbertura: '2024-06-10',
      Status: 'Fechado'
    },
    {
      Id: 3,
      OperadorNome: 'João Santos',
      Valor: 1580.40,
      DataAbertura: '2024-06-15',
      Status: 'Fechado'
    },
    {
      Id: 4,
      OperadorNome: 'Ana Paula',
      Valor: 1890.60,
      DataAbertura: '2024-06-20',
      Status: 'Fechado'
    },
    {
      Id: 5,
      OperadorNome: 'Carlos Pereira',
      Valor: 2105.35,
      DataAbertura: '2024-07-01',
      Status: 'Fechado'
    },
    {
      Id: 6,
      OperadorNome: 'Fernanda Souza',
      Valor: 1750.80,
      DataAbertura: '2024-07-05',
      Status: 'Aberto'
    }
  ];
  

  formatDate(date: any): string {
    return moment(date).format('DD/MM/YYYY');
  }

  formatMoeda(valor: any): string {
    return  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
