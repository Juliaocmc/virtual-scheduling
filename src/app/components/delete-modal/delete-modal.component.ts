import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatCardContent, MatCardTitle } from '@angular/material/card';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/model';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [
    MatCardTitle,
    MatCardContent,
    MatDialogContent
  ],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css'
})
export class DeleteModalComponent {

  mostrar: boolean = true;

  constructor(
    private service: ContactService,
    public dialogRef: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public contact: Contact
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  delete() {
    this.service.deleteContact(this.contact.id)
      .subscribe({
        next: () => {
          alert(`O contato foi deletado com sucesso.`)
          this.dialogRef.close();
          window.location.reload();
        }
      })
  }

  toggle() {
    this.mostrar = !this.mostrar;
  }
}
