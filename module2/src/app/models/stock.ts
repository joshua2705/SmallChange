export class Stock {
    constructor(public symbol: string, public quantity: string, public orderDate: string,
        public transactionDate: string, public exgPrice: number,
        public type: string ){

    }
}
