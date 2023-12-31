export class Customer{

    private _fName!: string;
    public get fName(): string {
        return this._fName;
    }
    public set fName(value: string) {
        this._fName = value;
    }
   
    private lName: string;

    constructor(firstName: string, lastName:string){
        this.fName=  firstName;
        this.lName= lastName;
    }

}

