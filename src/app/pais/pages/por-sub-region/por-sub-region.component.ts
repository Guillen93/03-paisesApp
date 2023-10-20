import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-sub-region',
  templateUrl: './por-sub-region.component.html',
  styleUrls: ['./por-sub-region.component.css']
})
export class PorSubRegionComponent {
  subregiones: string[] = ['Eastern Europe' ,  'Northern Europe',  'Southern Europe','Western Europe'];
  subregionActiva: string = '';
  termino: string = '';
  errorExist: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  activarRegion(subregion: string) {
    if (subregion == this.subregionActiva) { return }
    this.subregionActiva = subregion;
    this.buscarSubRegion(this.subregionActiva);
  }

  buscarSubRegion(termino: string) {

    this.termino = termino;
    this.errorExist = false;
    this.paisService.buscarSubRegion(this.termino).subscribe({

      next: (subregion) => { console.log(subregion); this.paises = subregion; },
      error: (e) => { console.log(e); this.errorExist = true }

    });

  }
}
