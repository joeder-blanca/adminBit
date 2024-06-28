import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, pt_BR } from 'ng-zorro-antd/i18n';

import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

import { AuthService } from './shared/services/auth.service';
import { adminApiProvider } from './shared/services/admin.service';
import { httpClient } from 'src/core/httpClient';
import { BaseService } from './shared/services/base.service';
import { ReceitaComponent } from './pages/financeiro/receita/receita.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NovoFinanceiroComponent } from './pages/financeiro/components/novo-financeiro/novo-financeiro.component';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CadastroComponent } from './pages/cadastro/cadastro.component';


registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ReceitaComponent,
    NovoFinanceiroComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
    NzSpinModule
  ],
  providers: [
    AuthService,
    adminApiProvider,
    httpClient,
    BaseService,
    { provide: NZ_I18N, useValue: pt_BR }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
