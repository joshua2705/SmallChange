export class Stock {
  constructor(
    public symbol: string,
    public quantity: number,
    public orderDate: string,
    public transactionDate: string,
    public exgPrice: number,
    public totalInvestment: number,
    public type: string,
    public percentChange: number,
    public priceChange:number,
  ) {}
}
