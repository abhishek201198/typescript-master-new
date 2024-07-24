class User {
    protected  _courseCount = 1
    private readonly city: string = "jaipur"
    constructor(
        public email: string,
        public name: string
    ) {

    }
      
    private deleteToken(){
        console.log('token deleted')
    }
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('course count should be more than 1')
        }
        this._courseCount = courseNum;
    }
}
 
 class subUser extends User {
    isFamily:boolean = true;
    changeCourseCount(){
        this._courseCount = 4
    }
 }

const abhish = new User("h@jemail.com", "abhishek");