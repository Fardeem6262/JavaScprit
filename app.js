
// const number1 = [65, 75, 98, 44, 35, 98];
// const number2 = number1.map(myfunction);

// document.getElementById("demo").innerHTML = number2;

// function myfunction(value, index, array){
//     return value;
// }




// const number3 = [65, 75, 98, 44, 35, 98];
// const over50 = number3.filter(maxam50);

// document.getElementById("demo2").innerHTML = over50;

// function maxam50(value, index, array){
//     return value > 50;
// }




// const number5 = [65, 75, 98, 44, 35, 98];
// let sum = number5.reduce(reducefunction);

// document.getElementById("demo5").innerHTML = sum;


// function reducefunction(total, value, index, array){
//     return total + value
// }



// // const number7 = [65, 75, 98, 44, 35, 98];
// // let lessthan70 = number7.every(lessthan);

// // document.getElementById("demo6").innerHTML = lessthan70;


// // function reducefunction(value, index, array){
// //     return value < 100;
// // }




const numbers = [15, 6, 25, 15, 9, 13]

document.getElementById("demo").innerHTML = numbers.findIndex(myfunction);

function myfunction(value, index, array){
    return value > 18;
}


const myarry = Array.from("afnbvjagkjbjahcmxzjhck");

document.getElementById("demo2").innerHTML = myarry;




const fruits = ["mango", "apple", "lichi"];

const keys = fruits.keys();

let text = "";
for (let x of keys){
    text += x + "<br>";
}

document.getElementById("demo5").innerHTML = text;




const fruits2 = ["mango", "bannnaa", "apple", "aalu"];

document.getElementById("demo6").innerHTML = fruits2.includes("aalu")

