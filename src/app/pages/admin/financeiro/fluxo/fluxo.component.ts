import { Component } from '@angular/core';

@Component({
  selector: 'app-fluxo',
  templateUrl: './fluxo.component.html',
  styleUrls: ['./fluxo.component.css']
})
export class FluxoComponent {
  totalSaldo = 0;
  totalReceita = 0;
  totalDespesa = 0;
  totalLucro = 0;
  totalVS = 0;

  listFluxo: any = [];

  columns: string[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];


  ngOnInit(): void {
    const listFake = [
      {
          "Categoria": "Receitas",
          "Jan": 100.00,
          "Fev": 120.00,
          "Mar": 110.00,
          "Abr": 130.00,
          "Mai": 140.00,
          "Jun": 125.00,
          "Jul": 150.00,
          "Ago": 160.00,
          "Set": 170.00,
          "Out": 180.00,
          "Nov": 190.00,
          "Dez": 200.00
      },
      {
          "Categoria": "Despesas",
          "Jan": 80.00,
          "Fev": 85.00,
          "Mar": 90.00,
          "Abr": 95.00,
          "Mai": 100.00,
          "Jun": 105.00,
          "Jul": 110.00,
          "Ago": 115.00,
          "Set": 120.00,
          "Out": 125.00,
          "Nov": 130.00,
          "Dez": 135.00
      },
      {
          "Categoria": "Vendas/Serviços",
          "Jan": 200.00,
          "Fev": 210.00,
          "Mar": 220.00,
          "Abr": 230.00,
          "Mai": 240.00,
          "Jun": 250.00,
          "Jul": 260.00,
          "Ago": 270.00,
          "Set": 280.00,
          "Out": 290.00,
          "Nov": 300.00,
          "Dez": 310.00
      },
      {
          "Categoria": "Lucro Bruto",
          "Jan": 20.00,
          "Fev": 35.00,
          "Mar": 20.00,
          "Abr": 35.00,
          "Mai": 40.00,
          "Jun": 20.00,
          "Jul": 40.00,
          "Ago": 45.00,
          "Set": 50.00,
          "Out": 55.00,
          "Nov": 60.00,
          "Dez": 65.00
      },
      {
          "Categoria": "Saldo",
          "Jan": 20.00,
          "Fev": 35.00,
          "Mar": 20.00,
          "Abr": 35.00,
          "Mai": 40.00,
          "Jun": 20.00,
          "Jul": 40.00,
          "Ago": 45.00,
          "Set": 50.00,
          "Out": 55.00,
          "Nov": 60.00,
          "Dez": 65.00
      }
  ]
    this.listFluxo = listFake;
    this.totalReceita = 1500;
    this.totalDespesa = 1350;
    this.totalVS = 1500;
    this.totalLucro = 400;
    this.totalSaldo = this.totalReceita - this.totalDespesa;
  }

  formatMoeda(valor: any): string {
    return  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

}
