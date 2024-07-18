import { Component, ChangeDetectorRef } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {
  mesasTotais: number = 0;
  mesasOcupadas: number = 0;
  mesasLivres: number = 0;
  idMesa: number = 0;
  visibleConfig: boolean = false;
  visibleNovoComanda: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  sessao = [
    {
      statusCor: 'success',
      status: "Aberto",
      dataHoraAbertura: "2024-07-18 05:28:40",
      userAbertura: 'Joeder Blanca',
      tempoAberto: ''
    }
  ];

  mesas = [
    { 
      cor: 'success',
      icone: 'fa-solid fa-square-check',
      numero: 1,
      status: 'Livre',
      cliente: '',
      comandas: 0,
      valor: 0
    }
  ];

  ngOnInit() {
    this.calcularMesas();
    this.atualizarTempoAberto();
    setInterval(() => {
      this.calcularMesas();
      console.log('pagina atualizada');
    }, 60000);
  }

  atualizarTempoAberto() {
    interval(1000).subscribe(() => {
      if (this.sessao[0].status === 'Aberto') {
        this.sessao.forEach(s => {
          const abertura = new Date(s.dataHoraAbertura);
          const agora = new Date();
          const diffMs = agora.getTime() - abertura.getTime();
          const diffSecs = Math.floor(diffMs / 1000) % 60;
          const diffMins = Math.floor(diffMs / (1000 * 60)) % 60;
          const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));  
          s.tempoAberto = `${diffHrs}h ${diffMins}m ${diffSecs}s`;
        });
      }
    });
  }
  
  calcularMesas() {
    this.mesasTotais = this.mesas.length;
    this.mesasOcupadas = this.mesas.filter(card => card.status === 'Ativo' || card.status === 'Ocupado').length;
    this.mesasLivres = this.mesasTotais - this.mesasOcupadas;
  }

  onMesaAtualizada(event: { idMesa: number; status: string }) {
    this.alterarStatusMesa(event.idMesa, event.status);
    this.calcularComandas(event.idMesa);
  }

  //comandos e funcionalidades
  abrirLoja(){
    this.alterarStatusLoja();
  }

  fecharLoja(){
    this.alterarStatusLoja();
  }

  adicionarComanda(idMesa: number){
    this.idMesa = idMesa;
    this.visibleNovoComanda = true;
  }

  liberarMesa(idMesa: number){
    const mesa = this.mesas.find(m => +m.numero === idMesa);
    //verifica se a mesa possui comandas em aberto e toma tratativas;
    //chama a api que faz a liberação da mesa;
  }

  acessarConfiguracoes(){
    this.visibleConfig = true;
  }

  //codigo temporario sem API


  alterarStatusLoja() {
    const sessao = this.sessao[0];
  
    if (sessao.status === 'Aberto') {
      sessao.status = 'Fechado';
      sessao.dataHoraAbertura = '';
      sessao.statusCor = 'danger';
      sessao.tempoAberto = '';
    } else {
      sessao.status = 'Aberto';
      sessao.dataHoraAbertura = new Date().toISOString();
      sessao.statusCor = 'success';
      sessao.tempoAberto = '';
    }
  }
  
  
  
  alterarStatusMesa(idMesa: number, status: string) {
    const mesa = this.mesas.find(m => +m.numero === idMesa);

    if (mesa) {
      mesa.status = status;
      if (status === 'Livre') {
        mesa.cor = 'success';
        mesa.icone = 'fa-solid fa-square-check';
        mesa.comandas = 0;
      } else if (status === 'Ocupado') {
        mesa.cor = 'danger';
        mesa.icone = 'fa-solid fa-square-xmark';
      } else if (status === 'Reservado') {
        mesa.cor = 'warning';
        mesa.icone = 'fa-solid fa-clock';
      } else if (status === 'Inativo') {
        mesa.cor = 'dark';
        mesa.icone = 'fa-solid fa-circle-info';
      }
      this.cdr.detectChanges(); 
    }
  }

  calcularComandas(idMesa: number) {
    const mesa = this.mesas.find(m => +m.numero === idMesa);

    if (mesa) {
      mesa.comandas = mesa.comandas + 1;
      this.cdr.detectChanges();
    }
  }


}
