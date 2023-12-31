class Customer1{

    private _fName: string;
   
    private lName: string;

    constructor(firstName: string, lastName:string){
        this.fName=  firstName;
        this.lName= lastName;
    }

    public get fName(): string {
        return this._fName;
    }
    public set fName(value: string) {
        this._fName = value;
    }
}

let myCustomer1 = new Customer("Jack","Sparrow"); 

console.log(myCustomer.fName);
