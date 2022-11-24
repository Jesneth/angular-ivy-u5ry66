import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ejercicio4-app',
  template: 'ejercicio4.component.html',
  styles: ['ejercicio4.component.css'],
})
export class ejercicio4Component implements OnInit {
  @Input() minimo: number = 1;
  @Input() maximo: number = 1;

  numeroActual: number = 1;

  constructor() {}

  ngOnInit() {
    this.numeroActual = this.minimo;
  }

  incrementarNumero() {
    if (this.numeroActual < this.maximo) {
      this.numeroActual++;
    }
  }

  decrementarNumero() {
    if (this.numeroActual > this.minimo) {
      this.numeroActual--;
    }
  }

  fijar(v: number) {
    if (this.maximo >= v && this.minimo <= v) {
      this.numeroActual = v;
    }
  }
}
