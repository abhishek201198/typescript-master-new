function addTwo(num: number): number {
    return num + 2;
    // return "Hello";  
}
function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {

}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

// function getValue(myVal: number): {
//     if(myVal>5){
//         return true;
//     }
//     else{
//         return "200 OK"
//     }
// }

const getHello = (s:string) :string => {
    return "";
 }


 const heros = ["thor", "spiderman", "ironman"];
 
 heros.map(hero =>{
    return `hero is ${hero}`;
 } )

 function consoleError(errmsg: string): void{
    console.log(errmsg);
    
 }
 function handleError(errmsg: string): never{
 throw new Error(errmsg);
    
 }

let myValue = addTwo(5);
getUpper("abhishek");
signUpUser('abhishek', 'xyz@gmail.com', false)
loginUser('h', 'a@a.com')




export { }