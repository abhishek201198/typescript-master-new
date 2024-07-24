interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponName: string, value:number): number
}

interface User {
    githubToken: string
}


interface Admin extends User {
    role: "admin" | "ta" | "learner"
}
let abhishek: Admin = {
    dbId: 251,
    role: "admin",
    githubToken:"amainly",
     email: 'h@h.com',
    userId: 252,
    startTrail: ()=>{
        return "hello"
        // return 25;
    },
    getCoupon: (name:"abhishek", off:10)=>{
        return 10;
    }
}