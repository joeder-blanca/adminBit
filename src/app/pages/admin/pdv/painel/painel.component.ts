import { Component, HostListener } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {
  vrTotalCupom = '';
  listCupom = [
    {
      Id: 1,
      Descricao: 'Coca-cola 2lts',
      Qtde: 10,
      ValorUn: 8.99,
      ValorTT: 89.90
    },
    {
      Id: 2,
      Descricao: 'Pepsi 1.5lts',
      Qtde: 5,
      ValorUn: 6.49,
      ValorTT: 32.45
    },
    {
      Id: 3,
      Descricao: 'Água Mineral 500ml',
      Qtde: 20,
      ValorUn: 1.50,
      ValorTT: 30.00
    },
    {
      Id: 4,
      Descricao: 'Batata Frita 150g',
      Qtde: 8,
      ValorUn: 3.75,
      ValorTT: 30.00
    },
    {
      Id: 5,
      Descricao: 'Chocolate 100g',
      Qtde: 12,
      ValorUn: 4.50,
      ValorTT: 54.00
    },
    {
      Id: 6,
      Descricao: 'Cerveja Lata 350ml',
      Qtde: 15,
      ValorUn: 2.99,
      ValorTT: 44.85
    },
    {
      Id: 7,
      Descricao: 'Pão de Forma',
      Qtde: 6,
      ValorUn: 5.25,
      ValorTT: 31.50
    }
  ];

  ngOnInit(): void {
    this.sumTotal();
    document.addEventListener('keydown', this.handleKeyboardEvent.bind(this));

  }


  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'F3') {
      event.preventDefault();
      console.log('acionei o botão' + 'F3')
    }
  }

  openModal(botao: string) {
    
  }

  sumTotal(): void {
    const v = this.listCupom.reduce((total, cupom) => total + cupom.ValorTT, 0);

    this.vrTotalCupom = this.formatMoeda(v);
  }
  

  formatDate(date: any): string {
    return moment(date).format('DD/MM/YYYY');
  }

  formatMoeda(valor: any): string {
    return  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
