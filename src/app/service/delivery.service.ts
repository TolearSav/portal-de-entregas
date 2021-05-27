import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Delivery } from '../model/entities/Delivery';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient) { }

  getAllDelivery(): Observable<Delivery[]> {
    return this.http.get<Delivery[]>('http://localhost:8080/delivery')
  }

  getByIdDelivery(id: number): Observable<Delivery> {
    return this.http.get<Delivery>(`http://localhost:8080/delivery/${id}`)
  }

  postDelivery(delivery: Delivery): Observable<Delivery> {
    return this.http.post<Delivery>('http://localhost:8080/delivery', delivery)

  }

  putDelivery(delivery: Delivery): Observable<Delivery>{
    return this.http.put<Delivery>('http://localhost:8080/delivery', delivery)
  }

}
