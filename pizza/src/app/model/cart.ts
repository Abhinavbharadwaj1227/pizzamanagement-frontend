import { Product } from "./Product";

export class Cart{
     
    constructor(public cartId :number,public price: number,public quantity:number,
    public pizza: Product){}
}