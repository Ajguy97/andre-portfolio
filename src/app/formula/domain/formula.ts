import {Variable} from './variable';

export class Formula {

  constructor(
    public formulaName: string,
    public variables: Array[Variable],
    public formulaExpression: String
  ) {}
}


