import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent {
  @Input('status') statusModal!: boolean;
  @Output() statusChange = new EventEmitter<boolean>();

  public modalWidth: string = '15%';
  public tituloModal!: string;
  public loading = false;
  public isSmallScreen = false; 

  public formDados: FormGroup;


  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver
  ) {
    this.formDados = this.fb.group({
      numeroMesa: [{ value: '', disabled: true }, Validators.required],
      mesasAtivas: [0, Validators.required],
    });

    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => {
      this.isSmallScreen = result.matches;
      this.modalWidth = this.isSmallScreen ? '100%' : '15%'; 
    });
  }

  handleOk(): void {
    this.statusModal = false;
  }

  handleCancel(): void {
    this.statusModal = false;
    this.statusChange.emit(this.statusModal);
  }



}
