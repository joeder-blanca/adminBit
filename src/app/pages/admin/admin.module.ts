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
import { ReceitaComponent } from '../financeiro/receita/receita.component';


@NgModule({
  declarations: [
    AdminAppComponent,
    IndexComponent,
    ReceitaComponent
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
