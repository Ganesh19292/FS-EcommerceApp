console.log("Hello World");

let isTrue: boolean = true;
let num: number =23;
let data: any = 21; 
let fName: String = "Jack";
let lName:string = "Sparrow";

console.log('the number is '+ num);
console.log("And it is "+ isTrue);
console.log('Hi ' + fName +" " + lName);
console.log(`Hi using template strings ${fName}`);

let sportsList: string[] = ["Cricket","Football","TT","BasketBall","NFL","Tennis"];
sportsList.push("Rugby");
for(let arr of sportsList){
    console.log(arr + " ");
}