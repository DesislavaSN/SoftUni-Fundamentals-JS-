//1.	Person Info
 
function personInfo(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
    return person;
}
console.log(personInfo("Peter", "Pan", "20"));
console.log(personInfo("George", "Smith", "18"));
