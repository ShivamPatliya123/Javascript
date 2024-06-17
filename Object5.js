const tinderUser = new Object()

// console.log(tinderUser);
tinderUser.id = "123@abc"
tinderUser.name = "shivam"
tinderUser.loginid = 'true'
// console.log(tinderUser);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

const obj4 = Object.assign(obj1,obj2,obj3)
// console.log(obj4)

const obj5 = {...obj1,...obj2,...obj3}
// console.log(obj5)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('loginid')); // if key is present in the object return true if key is not present in object return false

/* Nested object */

const regularUser = {
    email :"some@gmail.com",
    fullname :{
        userfullname :{
            firstName : 'shivam',
            LastName : 'Gurjar'
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstName.LastName)

/* De-structure */

const course = {
    courseName : "Javascript",
    coursePrice : "1100",
    courseInstructar:"XYZ ABC"
}

const{courseInstructar}=course
console.log(courseInstructar)

const{courseInstructar:instructar}=course
console.log(instructar)
