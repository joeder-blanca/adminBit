import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-comercio-anual',
  templateUrl: './comercio-anual.component.html',
  styleUrls: ['./comercio-anual.component.css']
})
export class ComercioAnualComponent {
  @ViewChild('comercioAnual', { static: true }) elemento!: ElementRef;

  data: any = [];

  ngOnInit(): void {
    Chart.register(...registerables); 
    const listFake = [
      {
          "Categoria": "Compras",
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
          "Categoria": "Vendas",
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
          "Categoria": "Saldo Comercial",
          "Jan": 10.00,
          "Fev": 45.00,
          "Mar": 30.00,
          "Abr": 25.00,
          "Mai": 10.00,
          "Jun": 50.00,
          "Jul": 55.00,
          "Ago": 35.00,
          "Set": 20.00,
          "Out": 15.00,
          "Nov": 10.00,
          "Dez": 5.00
      }
  ]
      this.data = listFake;
      this.createChart(this.data);
  }

  private createChart(data: any[]): void {
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const categories = ['Vendas', 'Compras', 'Lucro Bruto', 'Saldo Comercial'];

    const datasets = categories.map(categoria => ({
      data: months.map(mes => {
        const item = data.find(d => d.Categoria === categoria);
        return item ? item[mes] : 0;
      }),
      label: categoria,
      backgroundColor: this.getColorForCategory(categoria),
      borderColor: this.getBorderColorForCategory(categoria),
      borderWidth: 1,
      fill: false
    }));

    new Chart(this.elemento.nativeElement, {
      type: 'line',
      data: {
        labels: months,
        datasets: datasets
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  private getColorForCategory(categoria: string): string {
    switch (categoria) {
      case 'Vendas':
        return 'rgba(40, 167, 69, 0.2)';
      case 'Compras':
        return 'rgba(220, 53, 69, 0.2)';
      case 'Lucro Bruto':
        return 'rgba(255, 193, 7, 0.2)';
      case 'Saldo Comercial':
        return 'rgba(255, 255, 255, 0.2)';
      default:
        return 'rgba(0, 0, 0, 0.2)';
    }
  }

  private getBorderColorForCategory(categoria: string): string {
    switch (categoria) {
      case 'Vendas':
        return 'rgba(40, 167, 69, 1)';
      case 'Compras':
        return 'rgba(220, 53, 69, 1)';
      case 'Lucro Bruto':
        return 'rgba(255, 193, 7, 1)';
      case 'Saldo Comercial':
        return 'rgba(255, 255, 255, 1)';
      default:
        return 'rgba(0, 0, 0, 1)';
    }
  }
}
