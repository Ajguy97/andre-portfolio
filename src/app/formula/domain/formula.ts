import {Variable} from './variable';

export class Formula {

  constructor(
    public formulaName: string,
    public formulaVariables: Variable[],
    public formulaExpression: string
  ) {}
}


