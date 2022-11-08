export class Stock {
  //purchasePrice: number;
  /*"tickerId": "S01",
        "purchasePrice": 200,
        "quantity": 1,
        "gainPercentage": 8,
        "marketCap": 12,
        "volume": 3400*/
  constructor(
    public tickerId: string,
    public name: string,
    public purchasePrice: number,
    public quantity: number,
    public gainPercentage: number,
    public marketCap: number,
    public volume: number,
    public gainValue: number
    
  ) {}
}
