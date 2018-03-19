import { Component, OnInit } from '@angular/core';
import {FormulaService} from '../formula.service';
import {Formula} from '../domain/formula';

@Component({
  selector: 'app-formula-list',
  templateUrl: './formula-list.component.html',
  styleUrls: ['./formula-list.component.css']
})
export class FormulaListComponent implements OnInit {
  formulaList: Array[Formula] = [];

  constructor(
    private formulaService: FormulaService
  ) { }

  ngOnInit() {
    this.formulaList = this.formulaService.getFormulas();
    console.log(this.formulaList);
  }

}
