// const User = {
//     name: "abhishek",
//     email: 'xyz@gmail.com',
//     isActive : true,
// }

// function createUser({name: string, isPaid: boolean}){

// }
// let newUser = {name:"abhishek", isPaid:true, email:"h@history.com" }
// createUser(newUser ) ;

// function createCourse():{name:string, price: number}{
//   return { name:"react-js", price:399}
// }

// type User = {
//     name:string,
//     email:string,
//     isActive: boolean,

// }


// function createUser(user:User):User{
//     return {name:"", email:"", isActive:true}
     
// }

// createUser({name:"", email:"", isActive:true})

type User = {
    readonly _id: string,
    name:string,
    email: string,
    isActive: boolean ,
    credcardDetail? : number
}

let myUser : User= {
    _id: "12345",
    name:"abhishek",
    email:" y@y.com",
    isActive: false 
}

myUser.email = "abhishek@1235mial.com"
// myUser._id = "hsdhs"

type cardNumber = {
    cardNumber: string
}

type cardDate= {
    cardDate : string
}

type cardDetails = cardDate & cardNumber & {
    cvv: number 
}

export{};