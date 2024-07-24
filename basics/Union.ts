let score :number | string | boolean= 356;

score =45;
score = true
score = "abhuishek"

type User = {
   name: string,
   id: number
}

type Admin = {
    username : string,
    id:  number
}

let abhishek : User | Admin = {name:"abhishek", id:349}
abhishek  = {username:"abhishek", id:349}

function getDbId(id: number | string){
    if(typeof id === 'string'){
        id.toLowerCase()
    }
}

//  Array

const data: number[] = [1,23,4];
const data2 : string[] = ['a','b','c']

const data3 : (string | number | boolean) [] = [1,23,5,"a", true]
// const data3 : any [] = [1,23,5,"a", true]

let pi : 3.14 = 3.14; 
