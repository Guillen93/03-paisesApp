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

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {

    this.termino = termino;
    this.errorExist = false;
    this.paisService.buscarPais(this.termino).subscribe({

      next: (paises) => { console.log(paises); this.paisesResp = paises; },
      error: (e) => { console.log(e); this.errorExist = true }

    });

  }
}

