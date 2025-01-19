import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { documentValidator, phoneValidator, twoWordsValidator } from '../../services/validators.service';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-contact',
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
    NgxMaskDirective
  ],
  providers: [provideNgxMask()],
  templateUrl: './new-contact.component.html',
  styleUrl: './new-contact.component.css'
})
export class NewContactComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient,  private router: Router) {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, twoWordsValidator()]],
      email: ['', [Validators.required, Validators.email]],
      document: ['', [Validators.required, documentValidator(), Validators.maxLength(11)]],
      phone: ['', [Validators.required, phoneValidator()]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const body = this.form.value
      this.http.post<any>(
        `https://516c9b31-2604-42fc-b567-63c5a40e439f.mock.pstmn.io/contact`,
        body
      )
      .subscribe({
        next: data => {
          console.log(data.message)
          alert(`O contato ${body.name} foi salvo com sucesso.`)
          this.router.navigate(['/contact']);
        }
      });
      
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

}
