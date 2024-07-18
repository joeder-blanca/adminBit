import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'; // Importe BreakpointObserver do @angular/cdk/layout

@Component({
  selector: 'app-novo-comanda',
  templateUrl: './novo-comanda.component.html',
  styleUrls: ['./novo-comanda.component.css']
})
export class NovoComandaComponent implements OnInit, OnChanges {
  @Input() statusModal!: boolean;
  @Input() idMesa!: number;
  @Output() statusChange = new EventEmitter<boolean>();
  @Output() mesaAtualizada = new EventEmitter<{ idMesa: number, status: string }>();

  public modalWidth: string = '45%'; // Largura inicial do modal
  public tituloModal: string = 'Comanda';
  public loading = false;
  public selectedValue = null;
  public formDados: FormGroup;
  public formProdutos: FormGroup;
  public value: number = 0;
  public totalComanda: number = 0;
  public totalComandaString: string = '';

  listPessoas: any = [
    {
      Id: 1,
      Nome: 'Joeder Blanca'
    }
  ];

  listProdutos: any = [
    {
      Id: 1,
      Nome: 'Coca-Cola Lata',
      Valor: 3.50
    },
    {
      Id: 2,
      Nome: 'Fanta Lata',
      Valor: 3.50
    },
    {
      Id: 3,
      Nome: 'Coxinha',
      Valor: 3.50
    },
    {
      Id: 4,
      Nome: 'Batata Rufles',
      Valor: 3.50
    }
  ];

  listProdutosAdd: any = [];

  public isSmallScreen = false; // Variável para verificar se a tela é pequena

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver // Injeção do BreakpointObserver do @angular/cdk/layout
  ) {
    this.formDados = this.fb.group({
      numeroMesa: [{ value: '', disabled: true }, Validators.required],
      cliente: ['', Validators.required],
    });

    this.formProdutos = this.fb.group({
      produto: [''],
      qtde: [0]
    });

    // Observa mudanças de breakpoints para determinar se a tela é pequena
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => {
      this.isSmallScreen = result.matches;
      this.modalWidth = this.isSmallScreen ? '100%' : '45%'; // Define a largura do modal com base no tamanho da tela
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.totalComanda = this.listProdutosAdd.reduce((total: number, produto: any) => total + (produto.Qtde * produto.Valor), 0);
    this.totalComandaString = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.totalComanda);
    this.loading = false;
  }

  adicionarProduto() {
    const produtoSelecionado = this.listProdutos.find((p: any) => p.Id === this.formProdutos.value.produto);
    const qtde = this.formProdutos.value.qtde || 0;

    if (produtoSelecionado) {
      const index = this.listProdutosAdd.findIndex((p: any) => p.Id === produtoSelecionado.Id);

      if (index !== -1) {
        this.listProdutosAdd[index].Qtde += qtde;
      } else {
        const novoProduto = {
          Id: produtoSelecionado.Id,
          Nome: produtoSelecionado.Nome,
          Qtde: qtde,
          Valor: produtoSelecionado.Valor
        };
        this.listProdutosAdd.push(novoProduto);
      }

      this.atualizarTotalComanda();
    }
  }

  removerProduto(idProduto: number) {
    const index = this.listProdutosAdd.findIndex((produto: any) => produto.Id === idProduto);
    if (index !== -1) {
      this.listProdutosAdd.splice(index, 1);
      this.atualizarTotalComanda();
    }
  }

  atualizarTotalComanda() {
    this.totalComanda = this.listProdutosAdd.reduce((total: number, produto: any) => total + (produto.Qtde * produto.Valor), 0);
    this.totalComandaString = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.totalComanda);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['idMesa'] && changes['idMesa'].currentValue !== changes['idMesa'].previousValue) {
      this.formDados.patchValue({ numeroMesa: this.idMesa });
    }
  }

  handleCancel(): void {
    this.statusModal = false;
    this.statusChange.emit(this.statusModal);
  }

  onSubmit(): void {
    if (this.formProdutos.valid) {
      this.mesaAtualizada.emit({ idMesa: this.idMesa, status: 'Ocupado' });
      this.statusModal = false;
      this.statusChange.emit(this.statusModal);
    }
  }

  qtde(u: string) {
    let currentQtde = this.formProdutos.get('qtde')?.value || 0;

    if (u === '+') {
      currentQtde += 1;
    } else if (u === '-' && currentQtde > 0) {
      currentQtde -= 1;
    }

    this.formProdutos.patchValue({ qtde: currentQtde });
  }
}
