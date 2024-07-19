import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-categoria-anual',
  templateUrl: './categoria-anual.component.html',
  styleUrls: ['./categoria-anual.component.css']
})
export class CategoriaAnualComponent implements OnInit {
  @ViewChild('categoriaAnual', { static: true }) elemento!: ElementRef;

  private chart: Chart | undefined;
  public currentView: 'despesas' | 'receitas' = 'receitas';

  private listFake = {
    despesas: [
      {
        "Categoria": "Energia",
        "Valor": 450
      },
      {
        "Categoria": "Telefone",
        "Valor": 300
      },
      {
        "Categoria": "Escola",
        "Valor": 800
      },
      {
        "Categoria": "Mercado",
        "Valor": 750
      },
      {
        "Categoria": "Combustível",
        "Valor": 350
      }
      ,
      {
        "Categoria": "Água",
        "Valor": 120
      }
      ,
      {
        "Categoria": "Faculdade",
        "Valor": 390
      }
    ],
    receitas: [
      {
        "Categoria": "Vendas",
        "Valor": 1200
      },
      {
        "Categoria": "Serviços",
        "Valor": 250
      },
      {
        "Categoria": "Salário",
        "Valor": 4000
      },
      {
        "Categoria": "Freelance",
        "Valor": 500
      },
    ]
  };

  ngOnInit(): void {
    Chart.register(...registerables); 
    this.createChart(this.listFake.despesas); 
  }

  private createChart(data: any[]): void {
    const categories = data.map(item => item.Categoria);
    const values = data.map(item => item.Valor);

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(this.elemento.nativeElement, {
      type: 'bar',
      data: {
        labels: categories,
        datasets: [{
          label: this.currentView === 'despesas' ? 'Despesas' : 'Receitas',
          data: values,
          backgroundColor: this.currentView === 'despesas' ? 'rgba(220, 53, 69, 0.2)' : 'rgba(40, 167, 69, 0.2)',
          borderColor: this.currentView === 'despesas' ? 'rgba(220, 53, 69, 1)' : 'rgba(40, 167, 69, 1)',
          borderWidth: 1
        }]
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

  toggleView(): void {
    this.currentView = this.currentView === 'despesas' ? 'receitas' : 'despesas';
    this.createChart(this.listFake[this.currentView]);
  }
}
