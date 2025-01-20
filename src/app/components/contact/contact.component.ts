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
import { Contact } from '../../models/model';
import { ContactService } from '../../services/contact.service';

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
  constructor(
    private dialog: MatDialog,
    private service: ContactService,
  ) {

  }
  displayedColumns: string[] = ['name', 'phone', 'email', 'action'];
  dataSource = new MatTableDataSource<Contact>();
  totalElements = 0;
  currentPage = 10; 
  pageSize = 0;
  totalPage = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngOnInit() {
    this.loadData();
  }

  loadData(currentPage: number = this.currentPage, pageSize: number = this.pageSize) {
    this.service.getPaginatedContacts(pageSize, currentPage)
    .subscribe(response => {
      this.dataSource.data = response.contacts;  
      this.totalElements = response.totalElements;
      this.currentPage = response.totalElements;
      this.pageSize = response.totalElements;
      this.totalPage = response.totalElements;
    });
  }

  openEditModal(contact: Contact) {
    this.dialog.open(EditModalComponent, {
      height: '74%',
      width: '45%',
      panelClass: 'custom-modal',
      data: contact,
    })
  }

  onPageChange(event: any): void {
    const currentPage = event.pageIndex;
    const pageSize = event.pageSize;
    this.loadData(pageSize, currentPage);
  }

  openDeletetModal(contact: Contact) {
    this.dialog.open(DeleteModalComponent, {
      data: contact,
    })
  }

  openSchedulerModal(contact: Contact) {
    this.dialog.open(SchedulerModalComponent, {
      height: '74%',
      width: '45%',
      panelClass: 'custom-modal',
      data: contact,
    })
  }

}