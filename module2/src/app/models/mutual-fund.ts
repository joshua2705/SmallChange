export class MutualFund {
    constructor(
      public fundId: string,
      public fundName: string,
      public investedAmount: number,
      public gainPercentage: number,
      public currentValue: number
    ) {}
  }