import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { adminApiProvider } from 'src/app/shared/services/admin.service';
import { pessoasModel } from 'src/app/shared/models/pessoas.model';
import { contasModel } from 'src/app/shared/models/contas.model';
import { categoriasModel } from 'src/app/shared/models/categorias.model';
import { metodoModel } from 'src/app/shared/models/metodo.model';
import { format } from 'date-fns';
import { error } from 'jquery';

@Component({
  selector: 'app-novo-financeiro',
  templateUrl: './novo-financeiro.component.html',
  styleUrls: ['./novo-financeiro.component.css'],
})
export class NovoFinanceiroComponent {
  @Input('status') statusModal!: boolean;
  @Input('idTipo') idTipo!: number;
  @Output() statusChange = new EventEmitter<boolean>();

  //variaveis
  public modalWidth: string = '45%';

  isVisible = false;
  visibleComple = false;
  loading = false;
  tituloModal!: string;

  //listas
  listPessoas: any = [];
  listContas: any = [];
  listCategorias: any = [];
  listMetodo: any = [];

  financeiroForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _breakpointObserver: BreakpointObserver,
    public _adminApin: adminApiProvider
  ) {
    const dtIncFormatted = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    this.financeiroForm = this._fb.group({
      id_pessoa_origem: [null, Validators.required],
      id_conta: [null],
      id_categoria_sf: [null],
      dt_inc: [dtIncFormatted, Validators.required],
      id_metodo: [null],
      valor: [null, Validators.required],
      obs: [null],
    });
  }

  ngOnInit(): void {
    //ajuste responsidade
    this._breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        if (result.matches) {
          this.modalWidth = '100%';
        } else {
          this.modalWidth = '45%';
        }
      });

    //verifica titulo
    if (this.idTipo === 1) {
      this.tituloModal = 'Nova Receita Rápida';
    } else if (this.idTipo === 2) {
      this.tituloModal = 'Nova Despesa Rápida';
    }

    //obtem dados
    this.obterPessoas();
    this.obterContas();
    this.obterCategorias();
    this.obterMetodo();
  }

  //chamadas
  obterPessoas(): void {
    this._adminApin.getPessoas().then((data) => {
      this.listPessoas = data.map((item: any) =>
        new pessoasModel().mapFromApi(item)
      );
      const filteredPessoas = this.listPessoas.filter(
        (entry: pessoasModel) => entry.status === 'A'
      );
      this.listPessoas = filteredPessoas;
    });
  }

  obterContas(): void {
    this._adminApin.getContas().then((data) => {
      this.listContas = data.map((item: any) =>
        new contasModel().mapFromApi(item)
      );
      const filteredContas = this.listContas.filter(
        (entry: contasModel) => entry.status === 'A'
      );
      this.listContas = filteredContas;
    });
  }

  obterCategorias(): void {
    this._adminApin.getCategorias().then((data) => {
      this.listCategorias = data.map((item: any) =>
        new categoriasModel().mapFromApi(item)
      );
      const filteredCategorias = this.listCategorias.filter(
        (entry: categoriasModel) => entry.status === 'A'
      );
      this.listCategorias = filteredCategorias;
    });
  }

  obterMetodo(): void {
    this._adminApin.getMetodo().then((data) => {
      this.listMetodo = data.map((item: any) =>
        new metodoModel().mapFromApi(item)
      );
      const filteredMetodo = this.listMetodo.filter(
        (entry: metodoModel) => entry.status === 'A'
      );
      this.listMetodo = filteredMetodo;
    });
  }

  
async novoFinanceiro(tipo: number): Promise<void> {
  if (
    this.financeiroForm.invalid ||
    this.financeiroForm.get('valor')?.value === null ||
    this.financeiroForm.get('valor')?.value === ''
  ) {
    // Marca todos os controles do formulário como tocados para exibir mensagens de erro se forem inválidos
    Object.values(this.financeiroForm.controls).forEach(control => {
      control.markAsTouched();
    });
    return;
  }

  const userJson = localStorage.getItem('bitADMIN.user');
  if (userJson) {
    const _user = JSON.parse(userJson);
    const user = _user.id;
    const empresa = _user.id_empresa;

    const { valor, ...formValues } = this.financeiroForm.value;
    const dtVencFormatted = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    
    const formattedValues = {
      financeiro: {
        ...formValues,
        id_pessoa_inc: user,
        tipo: tipo,
        id_origem: 1,
        id_f_pgto: 1
      },
      parcelas: [
        {
          nr_parcela: 1,
          dt_venc: dtVencFormatted,
          valor: valor,
          id_pessoa_inc: user,
          id_empresa: empresa,
          status: 'A'
        }
      ]
    };

    
      await this._adminApin.postFinanceiro(formattedValues).then(success =>{
        console.log('ok');
      }).catch(error =>{
        console.log("Erro na chamada postOs, response: " + error)
      });
   
  } else {
    console.error('Erro: Não foi possível obter os dados do usuário para envio.');
  }
} 

  //funções modal
  showModal(): void {
    this.statusModal = true;
  }

  handleOk(): void {
    this.statusModal = false;
  }

  handleCancel(): void {
    this.statusModal = false;
    this.statusChange.emit(this.statusModal);
  }

  //funções componentes do modal
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  //formatacoes
  formatterReal = (value: number | null): string => {
    if (value === null || value === undefined) {
      return 'R$ 0,00';
    }
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
  };

  parserReal = (value: string): string => {
    if (value === null || value === undefined || value.trim() === '') {
      return '0';
    }
    return value.replace(/[R$\s]/g, '').replace(',', '.');
  };
}
