import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  constructor(private _cursosService: CursosService) { }

  ngOnInit() { }

  onAddCurso(curso: string) {
    this._cursosService.addCursos(curso);
  }

}
