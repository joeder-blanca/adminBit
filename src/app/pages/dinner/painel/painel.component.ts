import { Component } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {
  mesasTotais = 0;
  mesasOcupadas = 0;
  mesasLivres = 0;
  
  mesas = [
    { 
      cor: 'danger',
      icone: 'fa-solid fa-square-xmark',
      numero: '01',
      status: 'Ocupado',
      cliente: 'Cliente 1',
      comandas: 5,
      valor: 1500.00
    },
    { 
      cor: 'warning',
      icone: 'fa-solid fa-square-xmark',
      numero: '02',
      status: 'Reservado',
      cliente: 'Cliente 1',
      comandas: 5,
      valor: 1500.00
    },
    { 
      cor: 'success',
      icone: 'fa-solid fa-square-xmark',
      numero: '03',
      status: 'Livre',
      cliente: '',
      comandas: 0,
      valor: 0
    },
    { 
      cor: 'success',
      icone: 'fa-solid fa-square-xmark',
      numero: '04',
      status: 'Livre',
      cliente: '',
      comandas: 0,
      valor: 0
    },
    { 
      cor: 'success',
      icone: 'fa-solid fa-square-xmark',
      numero: '05',
      status: 'Livre',
      cliente: '',
      comandas: 0,
      valor: 0
    },
    { 
      cor: 'success',
      icone: 'fa-solid fa-square-xmark',
      numero: '06',
      status: 'Livre',
      cliente: '',
      comandas: 0,
      valor: 0
    },
    { 
      cor: 'success',
      icone: 'fa-solid fa-square-xmark',
      numero: '07',
      status: 'Livre',
      cliente: '',
      comandas: 0,
      valor: 0
    },
    { 
      cor: 'success',
      icone: 'fa-solid fa-square-xmark',
      numero: '08',
      status: 'Livre',
      cliente: '',
      comandas: 0,
      valor: 0
    },
    { 
      cor: 'success',
      icone: 'fa-solid fa-square-xmark',
      numero: '09',
      status: 'Livre',
      cliente: '',
      comandas: 0,
      valor: 0
    },
    { 
      cor: 'success',
      icone: 'fa-solid fa-square-xmark',
      numero: '10',
      status: 'Livre',
      cliente: '',
      comandas: 0,
      valor: 0
    },
    { 
      cor: 'success',
      icone: 'fa-solid fa-square-xmark',
      numero: '11',
      status: 'Livre',
      cliente: '',
      comandas: 0,
      valor: 0
    },
    { 
      cor: 'success',
      icone: 'fa-solid fa-square-xmark',
      numero: '12',
      status: 'Livre',
      cliente: '',
      comandas: 0,
      valor: 0
    },
    { 
      cor: 'dark',
      icone: 'fa-solid fa-circle-info',
      numero: '13',
      status: 'Inativo',
      cliente: '',
      comandas: 0,
      valor: 0
    },
    { 
      cor: 'dark',
      icone: 'fa-solid fa-circle-info',
      numero: '14',
      status: 'Inativo',
      cliente: '',
      comandas: 0,
      valor: 0
    },
    { 
      cor: 'dark',
      icone: 'fa-solid fa-circle-info',
      numero: '15',
      status: 'Inativo',
      cliente: '',
      comandas: 0,
      valor: 0
    },
    { 
      cor: 'dark',
      icone: 'fa-solid fa-circle-info',
      numero: '15',
      status: 'Inativo',
      cliente: '',
      comandas: 0,
      valor: 0
    },
    { 
      cor: 'dark',
      icone: 'fa-solid fa-circle-info',
      numero: '15',
      status: 'Inativo',
      cliente: '',
      comandas: 0,
      valor: 0
    },{ 
      cor: 'dark',
      icone: 'fa-solid fa-circle-info',
      numero: '15',
      status: 'Inativo',
      cliente: '',
      comandas: 0,
      valor: 0
    },
    { 
      cor: 'dark',
      icone: 'fa-solid fa-circle-info',
      numero: '15',
      status: 'Inativo',
      cliente: '',
      comandas: 0,
      valor: 0
    },

  ];

  ngOnInit() {
    this.calcularMesas();
    setInterval(() => {
      this.calcularMesas();
      console.log('pagina atualizada');
    }, 60000);
  }
  
  calcularMesas() {
    this.mesasTotais = this.mesas.length;
    this.mesasOcupadas = this.mesas.filter(card => card.status === 'Ativo' || card.status === 'Ocupado').length;
    this.mesasLivres = this.mesasTotais - this.mesasOcupadas;
  }
}
