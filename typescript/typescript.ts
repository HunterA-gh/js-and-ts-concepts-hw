var myName: string = "Dereck";
var myAge: number = 41;
var canVote: boolean = true;
var anything: any = "dog";
anything = 2;


/*
Types in TypeScript
-------------------
number
boolean
string
any
any[]

function name(params --> name: type) {

}

function name(): type <-- return {
 return type;
}

var name = (params) => {
}


function name(obj: { param1: type; param2?: type}) { <--- Param 2 is optional because of the ?
}

function name(param: type1 | type2) { <-- union type, combo of multiple types
}



*/


document.getElementById("p1").innerHTML = "Example words " + myAge;

document.write(anything + " is a type of " + typeof (anything));

document.getElementById("b4").innerHTML = "New large words";

var strArr: string[] = [ "values", "in", "the", "array"];

for(var s of strArr){
    document.write("<br>" + s + " ");
}

class Animal {
    public favFood: string;

    static numOfAnimals: number = 0;

    constructor(private name: string, private owner: string) {
        Animal.numOfAnimals++;
    }

    ownerInfo() {
        document.write(this.name + " owner is " + this.owner);
    }

    howManyAnimals(): number {
        return Animal.numOfAnimals;
    }

    private _weight: number;


    get weight(): number {
        return this._weight;
    }

    set weight(value: number) {
        this._weight = value;
    }


}

var a1 = new Animal("name", "name2");

a1.ownerInfo();
