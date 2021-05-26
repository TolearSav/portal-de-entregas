import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../model/Client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  ClientData(client: Client): Observable<Client> {
    return this.http.post<Client>('https://foop-delivery-api.herokuapp.com/client', client)
  }

}
