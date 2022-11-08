export class trade{
    constructor(

        public tradeId: number,
        public userId:number,
        public ticker: string,
        public tradeType: string, 
        public quantity: number,
        public purchasePrice: number,
        public purhchaseDate: string
    ){};
}