import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<String>();

  cursos: string[] = ['Angular', 'Java', 'Node.JS'];

  constructor() {
    console.log('CursosService');
  }

  getCursos() {
    return this.cursos;
  }

  addCursos(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
  }
}
