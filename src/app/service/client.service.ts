import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/entities/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClient(): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:8080/client')
  }

  getByIdClient(id: number): Observable<Client> {
    return this.http.get<Client>(`http://localhost:8080/client/${id}`)
  }

  postClient(client: Client): Observable<Client> {
    return this.http.post<Client>('http://localhost:8080/client', client)

  }

  putClient(client: Client): Observable<Client>{
    return this.http.put<Client>('http://localhost:8080/client', client)
  }

  deleteClient(id: number){
    return this.http.delete<Client>(`http://localhost:8080/client/${id}`)
  }
}
