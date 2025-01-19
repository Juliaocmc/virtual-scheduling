import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginatedResponse, NewContact, CreateSchedulerForm, SchedulerData, SchedulerDataResponse } from '../models/model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient,) { }

  createContact(body: NewContact): Observable<any> {
    return this.http.post<NewContact>(
      `https://516c9b31-2604-42fc-b567-63c5a40e439f.mock.pstmn.io/contact`,
      body
    )
    .pipe(map(data => data))
  }

  deleteContact(contactId: string) {
    return this.http.delete(
      `rota/${contactId}`
    )
    .pipe(map(data => data))
  }

  updateContact(contactId: string, body: any) {
    return this.http.put(
      `rota/${contactId}`,
      body
    )
    .pipe(map(data => data))
  }

  getPaginatedContacts(page: number, size: number): Observable<PaginatedResponse> {
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());
    return this.http.get<PaginatedResponse>(
      `https://3d62f73b-8c39-4f7d-ba2a-6d7f664eaec0.mock.pstmn.io/`,
      { params }
    );
  }

  createScheduler(body: CreateSchedulerForm) {
    return this.http.put(
      `rota/`,
      body
    )
    .pipe(map(data => data))
  }

  getScheduler(date: string): Observable<SchedulerDataResponse> {
    const params = new HttpParams()
    .set('date', date)
    return this.http.get<SchedulerDataResponse>(
      `https://8a5a0147-a05d-4542-896d-e2dd652b4828.mock.pstmn.io/schedulers`,
      { params }
    );
  }
}
