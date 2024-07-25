import { AuthService } from '../../../shared/services/auth.service'
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzPlacementType } from 'ng-zorro-antd/dropdown';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  public links = [{
    receitas: '../receitas',
    despesas: '../despesas',
    fluxo: '../fluxo',
    planejamento: '../plan'
  }]
 
}
