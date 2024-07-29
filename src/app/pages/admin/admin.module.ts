import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule} from './admin.route';
import { AdminAppComponent } from './admin.component';
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
import { IndexComponent } from './index/index.component';
import { ReceitaComponent } from './financeiro/receita/receita.component';
import { DespesaComponent } from './financeiro/despesa/despesa.component';
import { ContasComponent } from './financeiro/contas/contas.component';
import { FluxoComponent } from './financeiro/fluxo/fluxo.component';
import { ProfileComponent } from './profile/profile.component';
import { NovoFinanceiroComponent } from './financeiro/components/novo-financeiro/novo-financeiro.component';
import { FluxoAnualComponent } from './financeiro/components/graficos/fluxo-anual/fluxo-anual.component';
import { PlanejamentoComponent } from './financeiro/planejamento/planejamento.component';
import { MetaAnualComponent } from './financeiro/components/graficos/meta-anual/meta-anual.component';
import { MetaReceitaComponent } from './financeiro/components/graficos/meta-receita/meta-receita.component';
import { MetaDespesaComponent } from './financeiro/components/graficos/meta-despesa/meta-despesa.component';
import { CategoriaAnualComponent } from './financeiro/components/graficos/categoria-anual/categoria-anual.component';
import { VendaComponent } from './pedidos/venda/venda.component';
import { CompraComponent } from './pedidos/compra/compra.component';
import { DashboardComponent } from './pedidos/dashboard/dashboard.component';
import { CadastroComponent } from './configuracoes/cadastro/cadastro.component';
import { ComercioAnualComponent } from './financeiro/components/graficos/comercio-anual/comercio-anual.component';
import { PainelComponent } from './pdv/painel/painel.component';
import { HomeComponent } from './pdv/home/home.component';
import { PagarComponent } from './pdv/painel/components/pagar/pagar.component';
import { AlertMessageComponent } from './financeiro/components/alert-message/alert-message.component';

@NgModule({
  declarations: [
    AdminAppComponent,
    IndexComponent,
    ReceitaComponent,
    DespesaComponent,
    ContasComponent,
    FluxoComponent,
    ProfileComponent,
    NovoFinanceiroComponent,
    FluxoAnualComponent,
    PlanejamentoComponent,
    MetaAnualComponent,
    MetaReceitaComponent,
    MetaDespesaComponent,
    CategoriaAnualComponent,
    VendaComponent,
    CompraComponent,
    DashboardComponent,
    CadastroComponent,
    ComercioAnualComponent,
    PainelComponent,
    HomeComponent,
    PagarComponent,
    AlertMessageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
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
export class AdminModule { }
