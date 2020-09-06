1)
console.log(hello);                                   
var hello = 'world';  
AFTER HOISTING BY THE INTERPRETER
var hello;
console.log(hello);  logs undefined

2)
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
AFTER HOISTING BY THE INTERPRETER
var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test(); console log magnet

3)
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
AFTER HOISTING BY THE INTERPRETER
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); console log super cool

4)
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
AFTER HOISTING BY THE INTERPRETER
var food = 'chicken';
console.log(food); consoles chicken
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
eat(); consoles half chicken

5)
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
AFTER HOISTING BY THE INTERPRETER
call var mean function
error

6)
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
AFTER HOISTING BY THE INTERPRETER
console genre; console undefined
function rewind
call rewind; console rock ,randb
console log genre, disco

7)
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
AFTER HOISTING BY THE INTERPRETER
console SVGForeignObjectElement;
function learn, then call it
console seattle, burbank; sj

8)
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
AFTER HOISTING BY THE INTERPRETER

