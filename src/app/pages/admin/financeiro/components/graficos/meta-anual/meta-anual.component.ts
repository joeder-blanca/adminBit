import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-meta-anual',
  templateUrl: './meta-anual.component.html',
  styleUrls: ['./meta-anual.component.css']
})
export class MetaAnualComponent implements OnInit {
  @ViewChild('metaAnual', { static: true }) elemento!: ElementRef;

  private chart: Chart | undefined;
  public currentView: 'receitas' | 'despesas' = 'receitas'; // Default view

  private listFake = {
    receitas: [
      {
        "Categoria": "Realizado Receitas",
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
        "Categoria": "Meta Receitas",
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
      }
    ],
    despesas: [
      {
        "Categoria": "Realizado Despesas",
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
        "Categoria": "Meta Despesas",
        "Jan": 150.00,
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
      }
    ]
  };

  ngOnInit(): void {
    Chart.register(...registerables); 
    this.createChart(this.listFake.receitas);
  }

  private createChart(data: any[]): void {
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    
    const categories = this.currentView === 'receitas'
      ? ['Realizado Receitas', 'Meta Receitas']
      : ['Realizado Despesas', 'Meta Despesas'];

    const datasets = categories.map(categoria => ({
      data: months.map(mes => {
        const item = data.find((d: any) => d.Categoria === categoria);
        return item ? item[mes] : 0;
      }),
      label: categoria,
      backgroundColor: this.getColorForCategory(categoria),
      borderColor: this.getBorderColorForCategory(categoria),
      borderWidth: 1,
      fill: false
    }));

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(this.elemento.nativeElement, {
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
      case 'Meta Receitas':
        return 'rgba(255, 215, 0, 0.6)';
      case 'Realizado Receitas':
        return 'rgba(40, 167, 69, 0.2)';
      case 'Meta Despesas':
        return 'rgba(255, 215, 0, 0.6)';
      case 'Realizado Despesas':
        return 'rgba(220, 53, 69, 0.2)';
      default:
        return 'rgba(0, 0, 0, 0.2)';
    }
  }

  private getBorderColorForCategory(categoria: string): string {
    switch (categoria) {
      case 'Meta Receitas':
        return 'rgba(255, 215, 0, 0.6)';
      case 'Realizado Receitas':
        return 'rgba(40, 167, 69, 1)';
      case 'Meta Despesas':
        return 'rgba(255, 215, 0, 0.6)';
      case 'Realizado Despesas':
        return 'rgba(220, 53, 69, 1)';
      default:
        return 'rgba(0, 0, 0, 1)';
    }
  }

  toggleView(): void {
    this.currentView = this.currentView === 'receitas' ? 'despesas' : 'receitas';
    this.createChart(this.listFake[this.currentView]);
  }
}
