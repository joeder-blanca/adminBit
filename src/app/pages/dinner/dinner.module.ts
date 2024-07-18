import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { DinnerAppComponent } from './dinner.component';

import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LoginComponent } from '../login/login.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DinnerRoutingModule } from './dinner.route';
import { PainelComponent } from './painel/painel.component';
import { ConfiguracoesComponent } from './painel/components/configuracoes/configuracoes.component';
import { NovoComandaComponent } from './painel/components/novo-comanda/novo-comanda.component';
import { AdicionarProdutoComponent } from './painel/components/adicionar-produto/adicionar-produto.component';
import { VendaAvulsaComponent } from './painel/components/venda-avulsa/venda-avulsa.component';
import { PainelCaixaComponent } from './painel/components/caixa/painel-caixa/painel-caixa.component';
import { MenuCaixaComponent } from './painel/components/caixa/menu-caixa/menu-caixa.component';
import { ListaComandasComponent } from './painel/components/lista-comandas/lista-comandas.component';


@NgModule({
  declarations: [
    DinnerAppComponent,
    IndexComponent,
    PainelComponent,
    ConfiguracoesComponent,
    NovoComandaComponent,
    AdicionarProdutoComponent,
    VendaAvulsaComponent,
    PainelCaixaComponent,
    MenuCaixaComponent,
    ListaComandasComponent
  ],
  imports: [
    CommonModule,
    DinnerRoutingModule,
    NzModalModule,
    NzButtonModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzDropDownModule,
    NzIconModule,
    NzDatePickerModule,
    NzTableModule,
    NzSelectModule,
    NzDrawerModule,
    NzModalModule,
    NzStepsModule,
    NzTabsModule,
    NzSwitchModule,
    NzInputNumberModule,
    NzCheckboxModule,
    NzRadioModule,
    NzSpinModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DinnerModule { 
  
}
