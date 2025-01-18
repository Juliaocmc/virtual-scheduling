import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCard } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { SchedulerModalComponent } from '../scheduler-modal/scheduler-modal.component';

export interface UserData {
  name: string;
  phone: string;
  email: string;
}

const USERS_DATA: UserData[] = [
  { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
  { name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' },
  { name: 'Alice Johnson', phone: '555-555-5555', email: 'alice@example.com' },
  { name: 'Bob Brown', phone: '444-444-4444', email: 'bob@example.com' },
  { name: 'Charlie White', phone: '333-333-3333', email: 'charlie@example.com' },
  // Adicione mais dados conforme necessário  { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
  { name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' },
  { name: 'Alice Johnson', phone: '555-555-5555', email: 'alice@example.com' },
  { name: 'Bob Brown', phone: '444-444-4444', email: 'bob@example.com' },
  { name: 'Charlie White', phone: '333-333-3333', email: 'charlie@example.com' },
  // Adicione mais dados conforme necessário  { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
  { name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' },
  { name: 'Alice Johnson', phone: '555-555-5555', email: 'alice@example.com' },
  { name: 'Bob Brown', phone: '444-444-4444', email: 'bob@example.com' },
  { name: 'Charlie White', phone: '333-333-3333', email: 'charlie@example.com' },
  // Adicione mais dados conforme necessário  { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
  { name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' },
  { name: 'Alice Johnson', phone: '555-555-5555', email: 'alice@example.com' },
  { name: 'Bob Brown', phone: '444-444-4444', email: 'bob@example.com' },
  { name: 'Charlie White', phone: '333-333-3333', email: 'charlie@example.com' },
  // Adicione mais dados conforme necessário  { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
  { name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' },
  { name: 'Alice Johnson', phone: '555-555-5555', email: 'alice@example.com' },
  { name: 'Bob Brown', phone: '444-444-4444', email: 'bob@example.com' },
  { name: 'Charlie White', phone: '333-333-3333', email: 'charlie@example.com' },
  // Adicione mais dados conforme necessário  { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
  { name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' },
  { name: 'Alice Johnson', phone: '555-555-5555', email: 'alice@example.com' },
  { name: 'Bob Brown', phone: '444-444-4444', email: 'bob@example.com' },
  { name: 'Charlie White', phone: '333-333-3333', email: 'charlie@example.com' },
  // Adicione mais dados conforme necessário  { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
  { name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' },
  { name: 'Alice Johnson', phone: '555-555-5555', email: 'alice@example.com' },
  { name: 'Bob Brown', phone: '444-444-4444', email: 'bob@example.com' },
  { name: 'Charlie White', phone: '333-333-3333', email: 'charlie@example.com' },
  // Adicione mais dados conforme necessário  { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
  { name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' },
  { name: 'Alice Johnson', phone: '555-555-5555', email: 'alice@example.com' },
  { name: 'Bob Brown', phone: '444-444-4444', email: 'bob@example.com' },
  { name: 'Charlie White', phone: '333-333-3333', email: 'charlie@example.com' },
  // Adicione mais dados conforme necessário
];

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatCard,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  constructor(private dialog: MatDialog) {

  }
  displayedColumns: string[] = ['name', 'phone', 'email', 'action'];
  dataSource = new MatTableDataSource(USERS_DATA);

  editModalOpen = false;
  deleteModalOpen = false;
  selectedElement: any;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  openEditModal() {
    this.dialog.open(EditModalComponent, {
      height: '74%',
      width: '45%',
      panelClass: 'custom-modal',
    })
  }

  openDeletetModal() {
    this.dialog.open(DeleteModalComponent)
  }

  openSchedulerModal() {
    this.dialog.open(SchedulerModalComponent, {
      height: '74%',
      width: '45%',
      panelClass: 'custom-modal',
    })
  }

}