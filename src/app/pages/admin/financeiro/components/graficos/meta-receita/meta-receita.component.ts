import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-meta-receita',
  templateUrl: './meta-receita.component.html',
  styleUrls: ['./meta-receita.component.css']
})
export class MetaReceitaComponent implements OnInit {
  @ViewChild('metaReceita', { static: true }) elemento!: ElementRef;
  private chart!: Chart<'doughnut'>;

  public data = {
    realizado: 80, 
    meta: 100      
  };

  ngOnInit(): void {
    Chart.register(...registerables);
    this.createChart(this.data.realizado, this.data.meta);
  }

  private createChart(realizado: number, meta: number): void {
    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(this.elemento.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Realizada', 'Meta'],
        datasets: [{
          data: [realizado, meta - realizado],
          backgroundColor: ['rgba(40, 167, 69, 0.6)', 'rgba(255, 215, 0, 0.6)'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                const value = tooltipItem.raw as number;
                return `${tooltipItem.label}: ${value}%`;
              }
            }
          }
        },
        cutout: '80%', 
        rotation: -90, 
        circumference: 180 
      }
    });
  }

  updateChart(view: string): void {
    if (view === 'realizado') {
      this.createChart(this.data.realizado, this.data.meta);
    } else if (view === 'meta') {
      this.createChart(this.data.meta, this.data.meta); 
    }
  }
}
