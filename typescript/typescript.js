var myName = "Dereck";
var myAge = 41;
var canVote = true;
var anything = "dog";
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
var strArr = ["values", "in", "the", "array"];
for (var _i = 0, strArr_1 = strArr; _i < strArr_1.length; _i++) {
    var s = strArr_1[_i];
    document.write("<br>" + s + " ");
}
var Animal = /** @class */ (function () {
    function Animal(name, owner) {
        this.name = name;
        this.owner = owner;
        Animal.numOfAnimals++;
    }
    Animal.prototype.ownerInfo = function () {
        document.write(this.name + " owner is " + this.owner);
    };
    Animal.prototype.howManyAnimals = function () {
        return Animal.numOfAnimals;
    };
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (value) {
            this._weight = value;
        },
        enumerable: false,
        configurable: true
    });
    Animal.numOfAnimals = 0;
    return Animal;
}());
var a1 = new Animal("name", "name2");
a1.ownerInfo();
