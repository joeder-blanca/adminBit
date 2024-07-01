import { AuthService } from '../../../shared/services/auth.service'//'
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { totaisModel } from 'src/app/shared/models/totais.model';
import { adminApiProvider } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomefinanComponent implements OnInit {
  @ViewChild('grFluxoAnual', { static: true }) fluxoAnualElemento!: ElementRef;
  @ViewChild('grCategorias', { static: true }) categoriasElemento!: ElementRef;

  vrReceitas: string = '';
  prReceitas: string = '';
  vrDespesas: string = '';
  prDespesas: string = '';
  vrVendas: string = '';
  vrServicosR: string = '';
  vrLancFinanceiroR: string = '';
  vrCompras: string = '';
  vrServicosD: string = '';
  vrLancFinanceiroD: string = '';
  vrPagar:string = '';
  vrReceber:string = '';
  vrSaldoF:string = '';

  vrSaldo: string = '';
  prSaldo: string = '';
  mesAtual: string = 'Junho';
  anoAtual: number = 2024

  listTotais:any = [];

  constructor(
    private _authService: AuthService,
    public _adminApi : adminApiProvider
  ) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.grFluxoAnual();
    this.getTotais();
  }

  private grFluxoAnual(): void {
    new Chart(this.fluxoAnualElemento.nativeElement, {
      type: 'line',
      data: {
        labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
        datasets: [
          {
            label: 'Receitas',
            data: [10, 20, 10, 25, 30, 25, 36, 55, 70, 60, 70, 50],
            borderColor: '#00c292',
            backgroundColor: 'rgba(0, 194, 146, 0.5)',
          },
          {
            label: 'Despesas',
            data: [15, 25, 12, 35, 60, 10, 30, 65, 55, 44, 33, 21],
            borderColor: '#dc3545',
            backgroundColor: 'rgba(220, 53, 69, 0.5)',
          }
        ]
      },
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false
        },
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
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

  private getColors(numCores: number): string[] {
    const cores: string[] = [];
    for (let i = 0; i < numCores; i++) {
      const cor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`;
      cores.push(cor);
    }
    return cores;
  }

  getTotais() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const firstDayOfPreviousMonth = new Date(currentYear, currentMonth - 2, 1);
    const lastDayOfPreviousMonth = new Date(currentYear, currentMonth - 1, 0);

    let totalReceitas = 0;
    let totalDespesas = 0;
    let totalReceitasMesAnterior = 0;
    let totalDespesasMesAnterior = 0;
    let saldoAnterior = 0;

    this._adminApi.getTotais().then(data => {
        this.listTotais = data;

        this.listTotais.forEach((entry: totaisModel) => {
            const entryDate = new Date(entry.data);
            const entryMonth = entryDate.getMonth() + 1;
            const entryYear = entryDate.getFullYear();

            if (entryYear === currentYear && entryMonth === currentMonth) {
                if (entry.tipo === "1") {
                    totalReceitas += parseFloat(entry.total);
                } else if (entry.tipo === "2") {
                    totalDespesas += parseFloat(entry.total);
                }
            } else if (entryYear === firstDayOfPreviousMonth.getFullYear() && entryDate >= firstDayOfPreviousMonth && entryDate <= lastDayOfPreviousMonth) {
                if (entry.tipo === "1") {
                    totalReceitasMesAnterior += parseFloat(entry.total);
                } else if (entry.tipo === "2") {
                    totalDespesasMesAnterior += parseFloat(entry.total);
                }
            }
        });

        let variacaoReceitas = 0;
        let variacaoDespesas = 0;
        let variacaoSaldo = 0;

        if(totalReceitasMesAnterior === 0){
          variacaoReceitas = 0
        }else if (totalReceitasMesAnterior != 0){
          variacaoReceitas = (totalReceitas / totalReceitasMesAnterior) * 100;
        }

        if(totalDespesasMesAnterior === 0){
          variacaoDespesas = 0
        }else if (totalDespesasMesAnterior != 0){
          variacaoDespesas = (totalDespesas / totalDespesasMesAnterior) * 100;
        }

        this.vrReceitas = totalReceitas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        this.vrDespesas = totalDespesas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        this.vrSaldo = (totalReceitas - totalDespesas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        saldoAnterior = totalReceitasMesAnterior - totalDespesasMesAnterior;

        if(saldoAnterior === 0){
          variacaoSaldo = 0
        }else if (saldoAnterior != 0){
          variacaoSaldo = (totalDespesas / saldoAnterior) * 100;
        }

        this.prDespesas = variacaoReceitas.toFixed(2);
        this.prReceitas = variacaoDespesas.toFixed(2);
        this.prSaldo = variacaoSaldo.toFixed(2);

    }).catch(error => {
        console.error(error);
    });
}


}
