import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { documentValidator, phoneValidator, twoWordsValidator } from '../../services/validators.service';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contact, NewContact } from '../../models/model';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-modal',
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
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.css'
})
export class EditModalComponent {
  mostrar: boolean = true;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public contact: Contact,
    private service: ContactService,
    public dialogRef: MatDialogRef<EditModalComponent>,
    private router: Router
  ) {
    this.form = this.fb.group({
      fullName: [this.contact.name, [Validators.required, twoWordsValidator()]],
      email: [this.contact.email, [Validators.required, Validators.email]],
      document: [this.contact.document, [Validators.required, documentValidator(), Validators.maxLength(11)]],
      phone: [this.contact.phone, [Validators.required, phoneValidator()]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulário enviado:', this.form.value);
      const body: NewContact = {
        name: this.form.value.fullName,
        email: this.form.value.email,
        document: this.form.value.document,
        phone: this.form.value.phone,
      }
      console.log("vai editar o ", this.contact.name)
      this.service.updateContact(this.contact.id, body)
        .subscribe({
          next: () => {
            alert(`O contato foi atualizado com sucesso.`)
            this.dialogRef.close();
            window.location.reload();
          }
        });
    } else {
      alert(`Existem erros em seu formulário.`)
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

  toggle() {
    this.mostrar = !this.mostrar;
  }
}
