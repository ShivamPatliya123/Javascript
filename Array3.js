const myArr = [1,2,6,4,34]
 const myArr1 = [66,345,134,"shivam",true] 

console.log(myArr)
console.log(typeof(myArr1))

/* methods function in ARRAY */

myArr.push(6) // Add element in last position of Array
myArr.push(3)
console.log(myArr);

myArr.pop() //remove element in last position
console.log(myArr);


myArr.unshift(45) //Add element in first position of array
console.log(myArr)

myArr.shift() //remove element in first position of array
console.log(myArr)

console.log(myArr.includes(3)) // search element in array if element present return true and if element is not present return false
console.log(myArr.includes(6))


console.log(myArr.indexOf(6));

console.log(myArr.join()) // join bind the data type and change the datatype

console.log(myArr.toString()) // convert into string

console.log(myArr.slice(1,4)) // give value of 1 to 3 
