const score: Array<number>  = []
const names : Array<string> = []

function identityOne(val:boolean | number) : boolean | number{
    return val
} 

function identityTwo (val: any):any{
    return  val;
}

 function identityThree<Type>(val: Type) : Type{
  return val;
 }

 function identityFour<T>(val:T):T{
    return val
 }

 interface Bottle{
    brand: string,
    type: number
 }

//  identityFour<Bottle>({ })

//  Generics in Function

 function getSearchProducts<T>(products:T[]) : T{
    //  do some database operations
    const myIndex = 3;
    return products[myIndex];
 }

//   Generics in Arrow Function

 const getMoreSearchProducts =<T,> (products:T[]): T=>{
    //  do some database operations
    const myIndex = 4
    return  products[myIndex];
 }


 interface Database {
    connection: string,
    username : string,
    password: string
 }

 function anotherFunction<T, U extends Database>(oneVal:T, twoVal:U):object {
    return  {
        oneVal,
        twoVal
    }
 }

// anotherFunction(3, {})
 
  interface Quiz {
    name: string,
    type: string
  }

  interface Course {
    name: string,
    author: string,
    subjects  : string
  }

  class Sellable<T> {
    public cart:T[] = []

    addToCart(product:T){
        this.cart.push(product)
    }
  }

  