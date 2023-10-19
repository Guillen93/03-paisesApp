import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  termino: string = '';
  errorExist: boolean = false;
  capitalResp: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {

    this.termino = termino;
    this.errorExist = false;
    this.paisService.buscarCapital(this.termino).subscribe({

      next: (capital) => { console.log(capital); this.capitalResp = capital; },
      error: (e) => { console.log(e); this.errorExist = true }

    });

  }
}
