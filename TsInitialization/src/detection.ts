function detectType(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase()
    }

    return val + 3;
}

function provideId(id: string | null) {
    if (!id) {
        console.log("please provide ID")
        return
    }
    id.toLocaleLowerCase()
}


function printAll(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}


interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }

}


function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString)
    } else {
        console.log(x.toUpperCase())
    }
}

type Fish = { swim: () => void }
type Bird = { fly: () => void }

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "fish food"
    } else {
        pet
        return "bird food"
    }
}


interface Circle {
    kind: "Circle",
    radius: number
}

interface Square {
    kind: "Square",
    side: number,
}

interface Rectangle {
    kind: "Rectangle",
    length: number,
    breadth: number
}


type Shape = Circle | Square | Rectangle

function getShape(shape: Shape) {
    if (shape.kind == "Circle") {
        return Math.PI * shape.radius ** 2;
    } else if(shape.kind == "Square"){
        return shape.side * shape.side
    } else{
        return shape.length * shape.breadth
    }
  
}


function getArea(shape: Shape) {
    switch (shape.kind) {
        case "Circle":
            return Math.PI * shape.radius ** 2;

        case "Square":
            return shape.side * shape.side;

        case "Rectangle": 
        return shape.length  * shape.breadth;

        default :
        const _defaultforshape: never = shape 
        return _defaultforshape
    }
}
  