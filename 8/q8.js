// Write a program with the constructor called Student that includes the name and gender
// fields of the fields
// 1. Create the studObj variable from the new Student and add the age field with the
// prototype
// 2. Create the studObj1 variable from the studObj2 and change value age field to 20
// with the prototype

function Student(name,gender) {
    this.name = name;
    this.gender = gender;
}

let studObj1 = new Student("Fateme", "female");
Student.prototype.age = 22;
console.log(`age of studObj1: ${studObj1.age}`);


let studObj2 = {};
Object.setPrototypeOf(studObj2, studObj1);
console.log(`age of studObj2 before change: ${studObj2.age}`);
Student.prototype.age = 20;
console.log(`age of studObj2 after change: ${studObj2.age}`);
