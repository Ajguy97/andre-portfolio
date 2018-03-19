import {Component, Input, OnInit} from '@angular/core';
import {Formula} from '../domain/formula';
import { Parser } from 'expr-eval';
@Component({
  selector: 'app-formula-card',
  templateUrl: './formula-card.component.html',
  styleUrls: ['./formula-card.component.css']
})
export class FormulaCardComponent implements OnInit {
  @Input() formula: Formula;
  answer ;
  expression: String ;

  constructor() { }

  ngOnInit() {
    this.expression = this.formula.formulaExpression;
    this.answer = Parser.evaluate(this.expression, {f : 10, m : 10, a : 10});
  }

}
