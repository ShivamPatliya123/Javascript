const myStm = Symbol("key1")

const Jsuser = {
    name:"shivam",
    "full_name":"shivam patliya",
    age : 20,
    [myStm] :"mykey1",
    email:"xyz"
}
// console.log(Jsuser.name)
// console.log(Jsuser["name"])

// console.log(Jsuser["full_name"])
// console.log(Jsuser);

// Jsuser.name = "jaydeep"
// console.log(Jsuser);
// Object.freeze(Jsuser)//not change of object valuse help of freeze
// Jsuser.name ='shivam'
// console.log(Jsuser);


Jsuser.greating = function(){
    console.log("hello js user")
}
console.log(Jsuser.greating())

Jsuser.greatingtwo = function(){
    console.log(`hello js user ${this.name}`);
}
console.log(Jsuser.greatingtwo());
