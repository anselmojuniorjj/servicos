import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-curso-criado',
  templateUrl: './curso-criado.component.html',
  styleUrls: ['./curso-criado.component.css']
})
export class CursoCriadoComponent implements OnInit {

  curso: string;

  constructor(private _cursosService: CursosService) { }

  ngOnInit() {
    this._cursosService.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    );
  }

}
