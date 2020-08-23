// Take 10,17,18,,14,15 sort its values in an array and filter elements >15 i.e 17,18
// b) print all the values and index of the values ==> 17,0 and 18,1
// c)map and multiply each element by 10 and print the final array i.e 170 & 180

arr = [10,17,18,,14,15];
//[ 10, 17, 18, <1 empty slot>, 14, 15 ]

arr = arr.filter((num) => num>15);
//[ 17, 18 ]

//Printing Values with Index
arr.forEach((a,b)=>{
  console.log(a+" "+b);
});
//17 0
//18 1

arr = arr.map((num) => num*10);
console.log(arr)
//[170,180]