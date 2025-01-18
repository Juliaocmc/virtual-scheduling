import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatCard } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface SchedulerData {
  hour: string;
  contact: string;
  local: string;
}

const SCHEDULER_DATA: SchedulerData[] = [
  { hour: '08:00', contact: 'John Doe', local: ' ON LINE' },
  { hour: '08:30', contact: 'John Doe', local: 'ON LINE' },
  { hour: '09:00', contact: 'Luan Santana', local: 'Escritorio 3 irmões' },
  { hour: '09:30', contact: 'Luan Santana', local: 'Escritorio 3 irmões' },
  { hour: '10:00', contact: 'Luan Santana', local: 'Escritorio 3 irmões' },

]

@Component({
  selector: 'app-home',
  standalone: true,
  providers: [provideNativeDateAdapter()],
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

  displayedColumns: string[] = ['hour', 'contact', 'local'];
  dataSource = new MatTableDataSource(SCHEDULER_DATA);

}
