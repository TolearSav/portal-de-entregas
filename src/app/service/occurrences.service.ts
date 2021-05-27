import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Occurrences } from '../model/entities/Occurrences';

@Injectable({
  providedIn: 'root'
})
export class OccurrencesService {

  constructor(private http: HttpClient) { }

  getAllOccurrences(): Observable<Occurrences[]> {
    return this.http.get<Occurrences[]>('http://localhost:8080/delivery{id}/occurrences')
  }

  postOccurrences(occurrences: Occurrences): Observable<Occurrences> {
    return this.http.post<Occurrences>('http://localhost:8080/delivery{id}/occurrences', occurrences)

  }
}
