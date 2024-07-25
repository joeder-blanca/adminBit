import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  page: string = '';

  responseLogin: any;

  constructor(
    private fb: NonNullableFormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updatePageValue();
  }

  private updatePageValue() {
    if(this.router.url === '/admin-about'){
      this.page = 'ADMIN';
    }else if(this.router.url === '/dinner-about'){
      this.page = 'DINNER';
    }
    
  }

  logar() {
    this.router.navigate(['/admin/index']);
  }

  submitForm(): void {
    const userName = this.validateForm.get('userName')!.value;
    const password = this.validateForm.get('password')!.value;

    if(this.router.url === '/admin-about'){
      this.router.navigate(['/admin/index']);
    }else if(this.router.url === '/dinner-about'){
      this.router.navigate(['/dinner/index']);
    }
  }

  processarSucesso(response: any) {
    this.responseLogin = response;
    this.authService.LocalStorage.salvarDadosLocaisUsuario(response);
    this.router.navigate(['/admin/index']);
  }

  processarFalha(fail: any) {
    if (fail.error) {
      if (fail.error.errors.Senha) {
        for (let erro of fail.error.errors.Senha) {
          console.log('erro 1 ->', erro);
        }
      }

      if (fail.error.errors.Mensagens) {
        for (let erro of fail.error.errors.Mensagens) {
          console.log('erro 2 ->', erro);
        }
      }
    } else {
      console.log('erro 3 ->', fail);
    }
  }
}
