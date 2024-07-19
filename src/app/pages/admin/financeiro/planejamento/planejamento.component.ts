import { Component } from '@angular/core';

@Component({
  selector: 'app-planejamento',
  templateUrl: './planejamento.component.html',
  styleUrls: ['./planejamento.component.css']
})
export class PlanejamentoComponent {
  listAno = [
    {
      Id: 2024,
      Nome: '2024'
    }
  ];

  listMes = [
    {
      Id: 7,
      Nome: 'Janeiro'
    }
  ];


  mesAtual = 'Julho';
  valorMesAtual = 99999;
  valorAnoAtual = 99999;
}
