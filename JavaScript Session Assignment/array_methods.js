//Array Methods

//Array Declaration
arr1 = [1,3,5,7,9]
arr2 = [2,4,6,8,10]

//concat()
arr = arr1.concat(arr2)
//O/P: [1,3,5,7,9,2,4,6,8,10]

//every()
arr.every((num)=> num%2==0)
//O/P: false

//filter()
arr.filter((num)=> num%2!=0)
//O/P: [1,3,5,7,9]

//sort()
arr = arr.sort()
//O/P: [1,2,3,4,5,6,7,8,9]

//forEach
console.log("Natural Numbers less than 10");
arr.forEach((num) =>{console.log(num);})
/* O/P:
Natural Numbers less than 10
1
2
3
4
5
6
7
8
9
*/

//indexOf()
arr.indexOf(7)
//O/P: 6

//join()
arr.join()
//O/P: "1,10,2,3,4,5,6,7,8,9"

//lastIndexOf()
arr.lastIndexOf(5)
//4

//map()
arr.map((num)=>num*num)
//O/P: [ 1, 100, 4, 9, 16, 25, 36, 49, 64, 81 ]

//pop()
arr.pop()
//O/P: 9
//arr = [1,2,3,4,5,6,7,8]

//push()
arr.push(9)
//10
//arr = [1,2,3,4,5,6,7,8,9]

//reduce()
arr.reduce((num1,num2)=>num1+num2)
//O/P: 55

//reduceRight()
arr.reduceRight((num1,num2)=>num1+num2)
//O/P: 55

//reverse()
arr.reverse()
//O/P: [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

//shift()
arr.shift()
//O/P: 1

//slice()
arr.slice(0,5)
//O/P: [ 2, 3, 4, 5, 6 ]

//some()
arr.some((num)=>num==2)
//O/P: true

//splice()
arr.splice(1,2)
//O/P : [3,4]
// arr = [ 2, 5, 6, 7, 8, 9 ]

//toString()
arr.toString()
//O/P: "2,5,6,7,8,9"

//unshift()
arr.unshift(1)
//O/P: 7

