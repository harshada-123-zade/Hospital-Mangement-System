import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Billing {
  id?: number;
  patientId: number;
  amount: number;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private apiUrl = 'http://localhost:8081/api/v4/billing';

  constructor(private http: HttpClient) {}

  getAllBills(): Observable<Billing[]> {
    return this.http.get<Billing[]>(this.apiUrl);
  }

  addBill(bill: Billing): Observable<Billing> {
    return this.http.post<Billing>(this.apiUrl, bill);
  }

}

