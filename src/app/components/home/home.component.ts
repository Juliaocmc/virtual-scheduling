import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDatepickerInputEvent, MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatCard } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ContactService } from '../../services/contact.service';
import { SchedulerData } from '../../models/model';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  providers: [
    provideNativeDateAdapter(),
    DatePipe
  ],
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatCard,
    MatTableModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  form: FormGroup;

  constructor(
    private service: ContactService,
    private datePipe: DatePipe,  
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      date: new FormControl(new Date())
    });
  }

  displayedColumns: string[] = ['hour', 'contact', 'local'];
  dataSource = new MatTableDataSource<SchedulerData>();

  ngOnInit() {
    this.form.get('date')?.setValue(new Date())
    const formattedDate = this.datePipe.transform(new Date, 'yyyy-MM-dd');
    this.loadData(formattedDate!);

  }

  onDateChange(event: MatDatepickerInputEvent<any>): void {
    const selectedDate = event.value;
    this.form.get('date')?.setValue(selectedDate);
    const formattedDate = this.datePipe.transform(this.form.value.date, 'yyyy-MM-dd');
    this.loadData(formattedDate!);
  }

  loadData(formattedDate: string) {
    if (formattedDate == null) {
      alert("A data escolhida é invalida")
      return
    }
    this.service.getScheduler(formattedDate)
    .subscribe(response => {
      this.dataSource.data = response.schedulers; 
    })
  }

  get date() {
    return this.form.get('date');
  }

}
