import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = '';
  errorExist: boolean = false;
  paisesResp: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {

    this.termino = termino;
    this.errorExist = false;
    this.mostrarSugerencias=false;
    this.paisService.buscarPais(this.termino).subscribe({
      next: (paises) => { console.log(paises); this.paisesResp = paises; },
      error: (e) => { console.log(e); this.errorExist = true }
    });

  }
  sugerencias(termino: string) {

    this.termino = termino;
    this.errorExist = false;
    this.mostrarSugerencias=true;
    this.paisService.buscarPais(this.termino).subscribe({
      next: (paises) => { this.paisesSugeridos = paises.slice(0,5); },
      error: (e) => { this.paisesSugeridos=[]}
    });

  }

}

