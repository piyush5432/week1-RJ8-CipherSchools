//1 .map()

//let array =[2,4,7,5,4];

/*function functionForMap(element){
    return element*element-1;

}
let newArray =array.map(functionForMap);

console.log(newArray)*/

// 2 for each
/*
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}

console.log(sum);*/

// 3.filter

/*const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result);*/

//4 .find

/*let array =[10 ,20,6,04,05,40,8489,054,15];
let temp = array.find((value) =>{
    return value >20;
});

console.log(temp);
*/

//5.sort

/*const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
    
console.log(points);*/

// oject deconstruction 
/*const person = { name: "John", age: 30, job: "Developer" };

const { name, age, job } = person;
console.log(name); // "John"
console.log(age); // 30
console.log(job); // "*/

// Map and set



/*let map = new Map([["name", "John"], ["age", 30], ["job", "Developer"]]);

console.log(map.get("name")); // "John"
console.log(map.get("age")); // 30
console.log(map.get("job")); // "Developer"*/

// class in js

class Person {
  constructor(name, age, job) {
      this.name = name;
      this.age = age;
      this.job = job;
  }
  getName() {
      return this.name;
  }
  setName(name) {
      this.name = name;
  }
}

let john = new Person("John", 30, "Developer");
console.log(john.getName()); // "John"
john.setName("Jane");
console.log(john.getName()); // "Jane"


