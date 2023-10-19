import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = 'https://restcountries.com/v3.1';

  buscarPais(termino: string) {

    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);

  }
  buscarCapital(termino: string) {

    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);

  }

  getPaisPorAlpha(id: string) {

    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);

  }

}
