import { Injectable } from '@angular/core';
import { Formula } from './domain/formula';
import { Variable } from './domain/variable';

@Injectable()
export class FormulaService {

  private formulaList: Formula[] = [
    new Formula('Force',
      [
        // new Variable('force', 'N'),
        new Variable('mass', 2, 'N'),
        new Variable('acceleration', 2 , 'N')
      ],
      'mass*acceleration'
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
