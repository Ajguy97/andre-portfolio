import { Injectable } from '@angular/core';
import { Formula } from './domain/formula';
import { Variable } from './domain/variable.ts';

@Injectable()
export class FormulaService {

  private formulaList: Array[Formula] = [
    new Formula('Force',
      [
        // new Variable('force', 'N'),
        new Variable('mass', 'N'),
        new Variable('acceleration', 'N')
      ],
      'm*a'
    )
    // , new Formula('Velocity',
    //   [
    //     new Variable('Velocity', 'm'),
    //     new Variable('Distance', 'm'),
    //     new Variable('Time', 's')
    //   ],
    //   'v=d/t'
    // )
  ];

  constructor() { }

  public getFormulas() {
    return this.formulaList;
  }

}
