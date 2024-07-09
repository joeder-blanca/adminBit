import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  urlImagem: string = 'https://media.licdn.com/dms/image/D4D03AQEpOx944Ustyw/profile-displayphoto-shrink_200_200/0/1718037918163?e=2147483647&v=beta&t=svQGr4iu5fsMEQsEClGbTuAh_a-KUq6_mnN0r2JoZJg';
  validateForm!: FormGroup;
  editMode: boolean = true;
  
  // Dados fictícios
  mockData = {
    nickname: "João",
    nome: "João Silva",
    idade: "30",
    email: "joao.silva@example.com",
    estado: "SP",
    cidade: "São Paulo"
  };

  // Lista de estados do Brasil
  estados = [
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'TO', nome: 'Tocantins' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      nickname: [{ value: this.mockData.nickname, disabled: !this.editMode }, [Validators.required]],
      nome: [{ value: this.mockData.nome, disabled: !this.editMode }, [Validators.required]],
      idade: [{ value: this.mockData.idade, disabled: !this.editMode }, [Validators.required]],
      email: [{ value: this.mockData.email, disabled: !this.editMode }, [Validators.required, Validators.email]],
      estado: [{ value: this.mockData.estado, disabled: !this.editMode }, [Validators.required]],
      cidade: [{ value: this.mockData.cidade, disabled: !this.editMode }, [Validators.required]]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      //chamar api para atualizar cadastro
      console.log('Form Submitted', this.validateForm.value);
      this.editMode = false;
      this.validateForm.disable();
    } else {
      this.validateForm.markAllAsTouched();
    }
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.validateForm.enable();
    } else {
      this.validateForm.disable();
    }
  }

  editarProfile(): void {
    this.editMode = true;
    this.validateForm.enable();
  }
}