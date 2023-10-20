import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  private fields: string = 'name,capital,flags,population,cca3';
  private apiUrl: string = 'https://restcountries.com/v3.1';

  buscarPais(termino: string) {

    const url = `${this.apiUrl}/name/${termino}?field=${this.fields}`;
    return this.http.get<Country[]>(url);

  }
  
  buscarCapital(termino: string) {

    const url = `${this.apiUrl}/capital/${termino}?field=${this.fields}`;
    return this.http.get<Country[]>(url);

  }

  getPaisPorAlpha(id: string) {

    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);

  }

  buscarRegion(termino: string) {

    const url = `${this.apiUrl}/region/${termino}?field=${this.fields}`;
    return this.http.get<Country[]>(url);

  }

}
