import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent {
  @Input('status') statusModal!: boolean;
  @Output() statusChange = new EventEmitter<boolean>();

  public modalWidth: string = '45%';
  public tituloModal!: string;
  public loading = false;

  handleOk(): void {
    this.statusModal = false;
  }

  handleCancel(): void {
    this.statusModal = false;
    this.statusChange.emit(this.statusModal);
  }



}
