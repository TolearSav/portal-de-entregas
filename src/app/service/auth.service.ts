import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../model/entities/Client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  ClientData(client: Client): Observable<Client> {
    return this.http.post<Client>('http://localhost:8080/client', client)
  }

  getByIdClient(id: number): Observable<Client> {
    return this.http.get<Client>(`http://localhost:8080/client/${id}`)
  }

}
