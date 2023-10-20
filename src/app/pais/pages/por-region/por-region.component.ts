import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  termino: string = '';
  errorExist: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  activarRegion(region: string) {
    if (region == this.regionActiva) { return }
    this.regionActiva = region;
    this.buscarRegion(this.regionActiva);
  }

  buscarRegion(termino: string) {

    this.termino = termino;
    this.errorExist = false;
    this.paisService.buscarRegion(this.termino).subscribe({

      next: (region) => { console.log(region); this.paises = region; },
      error: (e) => { console.log(e); this.errorExist = true }

    });

  }
}
