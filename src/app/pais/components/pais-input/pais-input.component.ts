import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';
  //observable para ver cuando se deja de modificar el input
  debouncer: Subject<string> = new Subject();

  termino: string = '';

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(event: any) {
    //emitimos al padre el termino del input
    this.debouncer.next(this.termino);
  }

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe(valor => {
      console.log('debounce:', valor);
      this.onDebounce.emit(valor);
    })

  }
}
