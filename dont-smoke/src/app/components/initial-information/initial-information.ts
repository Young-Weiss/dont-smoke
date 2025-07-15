import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-initial-information',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './initial-information.html',
  styleUrl: './initial-information.scss'
})
export class InitialInformation implements OnInit {
  ngOnInit(): void {
    console.log('entrou')
  }

  initialInformation = new FormGroup({
    walletValue: new FormControl<number | null>(null, [
      Validators.min(0)
    ]),
    cigarettesPerDay: new FormControl<number | null>(null, [
      Validators.max(100)
    ]),
  });

  onSubmit(): void {
    if (this.initialInformation.valid) {
      console.log('Dados do formulário:', this.initialInformation.value);
      // Aqui você pode processar os dados do formulário
    } else {
      console.log('Formulário inválido');
      this.markAllFieldsAsTouched();
    }
  }

  private markAllFieldsAsTouched(): void {
    Object.keys(this.initialInformation.controls).forEach(key => {
      this.initialInformation.get(key)?.markAsTouched();
    });
  }

  getErrorMessage(controlName: string): string {
    const control = this.initialInformation.get(controlName);

    if (control?.hasError('required')) {
      return 'Este campo é obrigatório';
    }

    if (control?.hasError('min')) {
      const minValue = control.errors?.['min']?.min;
      return `O valor mínimo é ${minValue}`;
    }

    if (control?.hasError('max')) {
      const maxValue = control.errors?.['max']?.max;
      return `O valor máximo é ${maxValue}`;
    }

    return '';
  }
}
