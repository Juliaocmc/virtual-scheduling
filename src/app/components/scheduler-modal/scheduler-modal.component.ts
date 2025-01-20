import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatError, MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Contact, CreateSchedulerForm } from '../../models/model';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { startBeforeEndValidator } from '../../services/validators.service';
import { getTimes } from '../../services/util.service'
import { ContactService } from '../../services/contact.service';
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  providers: [
    provideNativeDateAdapter(),
    DatePipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './scheduler-modal.component.html',
  styleUrl: './scheduler-modal.component.css'
})
export class SchedulerModalComponent {

  mostrar: boolean = true;
  form: FormGroup;
  times: string[] = getTimes()

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public contact: Contact,
    private datePipe: DatePipe,
    private service: ContactService,
  ) {
    this.form = this.fb.group({
      date: [null, Validators.required],
      start: [null, Validators.required],
      end: [null, Validators.required],
      local: [null, Validators.required],
    }
    );
  }

  onDateChange() {
    console.log('Data selecionada:', this.date);
  }

  onSubmit(): void {
    const formStarHour = this.form.value.start;
    const formEndHour = this.form.value.end;
    if (startBeforeEndValidator(formStarHour, formEndHour)) {
      alert("O horário de final deve depois do horário inicial.")
      return
    }

    if (this.form.valid) {
      const formattedDate = this.datePipe.transform(this.form.value.date, 'yyyy-MM-dd');
      const body: CreateSchedulerForm = {
        contactId: this.contact.id,
        date: formattedDate!,
        startHour: this.form.value.start,
        endHour: this.form.value.end,
        local: this.form.value.local,
      }
      this.service.createScheduler(body)
        .subscribe({
          next: () => {
            alert(`O contato foi salvo com sucesso.`)
            window.location.reload();
          }
        })
    }

  }

  get date() {
    return this.form.get('date');
  }

  get start() {
    return this.form.get('start');
  }

  get end() {
    return this.form.get('end');
  }

  get local() {
    return this.form.get('local');
  }


  toggle() {
    this.mostrar = !this.mostrar;
  }
}

