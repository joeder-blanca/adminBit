import { AuthService } from './../../shared/services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  responseLogin: any;

  constructor(
    private fb: NonNullableFormBuilder,
    private authService : AuthService,
    private router: Router
  ) {}


  submitForm(): void {
    const userName = this.validateForm.get('userName')!.value;
    const password = this.validateForm.get('password')!.value;
    // const usuario: any = {
    //   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    //   "usuarioToken": {
    //     "id": 123,
    //     "id_empresa": 456,
    //     "username": "johndoe",
    //     "claims": [
    //       { "type": "role", "value": "STANDARD" },
    //       { "type": "permission", "value": "read" },
    //       { "type": "permission", "value": "write" }
    //     ]
    //   }
    // };

    // localStorage.setItem('bitADMIN.user', JSON.stringify(usuario));

    // this.router.navigate(['/admin/index']);

    if (this.validateForm.valid) {
      this.authService.login(userName, password)
      .subscribe({
        next: (v) => this.processarSucesso(v),
        error: (e) => this.processarFalha(e),
        complete: () => console.info('complete')
      });
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  processarSucesso(response: any) {
    this.responseLogin = response;
    this.authService.LocalStorage.salvarDadosLocaisUsuario(response);
    this.router.navigate(['/admin/index']);

  }

  processarFalha(fail: any) {
    //this.loading = false;
    if (fail.error) {
      if (fail.error.errors.Senha) {
        for (let erro of fail.error.errors.Senha) {
          console.log('erro 1 ->', erro)
          //notify(erro, 'error', 3000);
        }
      }

      if (fail.error.errors.Mensagens) {
        for (let erro of fail.error.errors.Mensagens) {
          //notify(erro, 'error', 3000);
          console.log('erro 2 ->', erro)
        }
      }
    } else {
      //notify(fail, 'error', 3000);
      console.log('erro 3 ->', fail)
    }


  }



}
