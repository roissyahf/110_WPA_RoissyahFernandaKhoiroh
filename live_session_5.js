//practice what i learned in live session 5

//test my terminal
// console.log("My first try");
//Output: My first try

//DECLARATION IN VAR, LET, CONST
//DECLARE VAR
// var num
// console.log(num);
//Output: undefined, because we haven't define the variable yet

//DECLARE LET
// let my_name = "Roissyah"
// console.log(my_name);
//Output: Roissyah

//DECLARE CONST
// const num2 = 9
// console.log(num2);
//Output: 9

//REDECLARATION IN VAR, LET, CONST
//REDECLARE VAR
// var num1 = 9
// num1 =10
// console.log(num1)
//Output: 10, assigned new variable which is 10. It means we can redeclare VAR

//REDECLARE LET
// let my_name = "Roissyah"
// let my_name ="Fernanda"
// console.log(my_name);
//Output: SyntaxError, because we have been already declared my_name. It means, we can't redeclare LET

//REDECLARE CONST
// const num2 = 3
// const num2 = 6
// console.log(num2);
//Output SyntaxError, because we has been already declared num2. It means, CONST is unchangeable

//REASSIGNMENT IN VAR, LET, CONST
//REASSIGNMENT VAR
// var task_1 = "Brain-storming"
// console.log(task_1)

// task_1 = "Ask friends"
// console.log(task_1)
//Output: Brain-storming Ask friends. It means we can reassign VAR

//REASSIGNMENT LET
// let score_UTS = 80
// console.log(score_UTS)

// score_UTS = 75
// console.log(score_UTS)
//Output: 80 75. It means, we can also reassign LET 

//REASSIGNMENT CONST
// const numb3 = 112
// console.log(numb3)

// numb3 = 113
// console.log(numb3)
//Output: TypeError, because we can't reassign CONST

//SCOPING
//type 1: GLOBAL SCOPE by default
// var BookTitle = 'Data Science for Business'

//type 2: FUNCTION/LOCAL SCOPE
// function ReadBook() {
//     var BookTitle = 'Naked Statistics';
//     console.log(BookTitle);
// }
// ReadBook() //'Naked Statistics'
// console.log(BookTitle) //'Data Science for Business'

//type 3: BLOCK SCOPE
// if(true){
//     BookTitle = 'Deep Learning with Python'
//     console.log(BookTitle); //'Deep Learning with Python'
// }

//WHAT IF WE COMBINE ALL TYPE OF SCOPING
// var BookTitle = 'Data Science for Business'
// function ReadBook() {
//     var BookTitle = 'Naked Statistics';
//     console.log(BookTitle); //'Naked Statistics'
//     if(true){
//         BookTitle = 'Deep Learning with Python'
//         console.log(BookTitle); //'Deep Learning with Python'
//     }
//     console.log(BookTitle) //'Deep Learning with Python
// }

// ReadBook()
// console.log(BookTitle) //'Data Science for Business'

//HOISTING
// x = 10
// var x
// console.log(x) //10

// sayHi()

// function sayHi(){
//     console.log("Hello World") //"Hello World"
// }
//Conclusion: Variable and function can be used before it has been declared. In other word, VAR and FUNCTION are hoisted

// y = 20
// let y
// console.log(y)
//Output: ReferenceError, I conclude that LET isn't hoisted

// console.log(z)
// const z = 30
//Output: ReferenceError, I conclude that just like LET, CONST isn't hoisted. It should be initialize first.

//REFERENCES
// const arr1 = [1,2,3]
// const arr2 = arr1
// console.log(arr2);
// console.log(arr2===arr1);

//DESTRUCTURING
//IN ARRAY
// let my_name, age;
// [my_name, age] = ["Roissyah", 23]
// console.log(my_name); //"Roissyah"
// console.log(age); //23

// const x = [70, 85, 90]
// const [y,z] = x
// console.log(y) //70
// console.log(z) //85

// let k, l;
// [k="banana", l="apple"] = ["fruits"]
// console.log(k) //"fruits"
// console.log(l) //"apple"

// let k = "banana";
// let l= "apple";
// [k, l] = [l, k]
// console.log(k) //"apple"
// console.log(l) //"banana"

// function buy(){
//     return['garlic', 'sugar', 'salt']
// }
// const[a, ,b] = buy()
// console.log(a) //'garlic'
// console.log(b) //'salt'

//SPREAD
// const p = {a: 10, b:20};
// const q = {...p};
// console.log(q) //{a: 10, b:20}

// const r = {c: 30}
// const s = {...p, ...r}
// console.log(s) //{a: 10, b:20, c:30}


//Answer these
// 1. buatkan contoh reference variable
// const name_ = ['Diana', 'Patricia', 'Andine']
// const name2 = name_
// console.log(name2) //['Diana', 'Patricia', 'Andine']
// console.log(name_ === name2) //true

// 2. buatkan contoh destructive 4
// let odd, even;
// [odd=3, even=8] = ['real number']
// console.log(odd) //'real number'
// console.log(even) //8

// 3. reverse array [1, 3, 4, 7, 2, 9]
//if i use method
let arr = [1, 3, 4, 7, 2, 9]
console.log(arr.reverse()); //[ 9, 2, 7, 4, 3, 1 ] i don't want this, so i need to reverse it manually



// 4. buatkan pengecekan tipe data :
// [1, "Web", true, {name: "John"}, null] => [number, string, boolean, object, null]
// 5 buatkan pattern
// *
// **
// ***
// ****
// *****

//METHOD