export class Customer{
    
    constructor(public customername: string,public email: string, public password: string,public customerid:number, isAdmin: boolean
        ,public city:string ) { 
    }
}