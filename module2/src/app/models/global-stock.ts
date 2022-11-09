export class GlobalStock {
    constructor(
        public id: string, 
        public ticker: string, 
        public price: number, 
        public gainPercentage: number,
        public marketCap: number,
        public volume: number
        
         )
        { }
}
