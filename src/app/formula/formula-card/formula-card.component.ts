import {Component, Input, OnInit} from '@angular/core';
import { Formula } from '../domain/formula';
import { Variable } from '../domain/variable';
import { Parser } from 'expr-eval';
@Component({
  selector: 'app-formula-card',
  templateUrl: './formula-card.component.html',
  styleUrls: ['./formula-card.component.css']
})
export class FormulaCardComponent implements OnInit {
  @Input() formula: Formula;
  answer;
  expression: string;
  values = {};

  constructor() {
  }

  ngOnInit() {
    this.expression = this.formula.formulaExpression;
  }

  addToValues(x: string, y: number) {
    // values.x = "y"
  this.values[x] = y;
  }

  calculate() {
    for (const formulaVariable of this.formula.formulaVariables) {
      this.addToValues(formulaVariable.name, formulaVariable.variableValue);
    }
    if (this.expression && this.values !== null ) {
      this.answer = Parser.evaluate(this.expression, this.values);
    }
  }
}
