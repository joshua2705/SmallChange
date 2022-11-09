export class trade{
    constructor(

        public tradeId: number,
        public userId:number,
        public tickerid: string,
        public tradeType: string, 
        public quantity: number,
        public purchasePrice: number,
        public purchaseDate: string
    ){};
}