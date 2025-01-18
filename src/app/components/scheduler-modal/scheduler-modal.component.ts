import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-scheduler-modal',
  standalone: true,
  imports: [   
    MatCard,
   MatCardTitle,
   MatCardContent,
   MatFormField,
   MatLabel,
   MatError,
   MatInputModule,
   CommonModule,
   ReactiveFormsModule,
   NgxMaskDirective],
 providers: [provideNgxMask()],
  templateUrl: './scheduler-modal.component.html',
  styleUrl: './scheduler-modal.component.css'
})
export class SchedulerModalComponent {
  mostrar: boolean = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: ['O nome vem aqui', [Validators.required, ]], 
      email: ['O email', [Validators.required, Validators.email]], 
      document: ['11111111111', [Validators.required, , Validators.maxLength(11)]], 
      phone: ['1111111111', [Validators.required, ]],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Formulário enviado:', this.form.value);
    }
  }

  get fullName() {
    return this.form.get('fullName');
  }

  get email() {
    return this.form.get('email');
  }

  get document() {
    return this.form.get('document');
  }

  get phone() {
    return this.form.get('phone');
  }

  toggle () {
    this.mostrar = !this.mostrar;
  }
}
