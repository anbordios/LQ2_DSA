// Declare the  user input for Name, Address, Age, Class Roles, and Course
let name = prompt("Enter your name:");
let address = prompt("Enter your address:");
let age = parseInt(prompt("Enter your age:"));
let classRole = prompt("Enter your class role (Officer, Student, Teacher):");
let course = prompt("Enter your course (BSCS, BSM, BAEL):");

// Check the course to its corresponding class role in the form of conditional statement and loop statement 
if (course === "BSCS") {
    if (classRole === "Officer") {
        for (let i = 0; i < age / 4; i++) {
          console.log("Name:", name);
        }
    } else if (classRole === "Student") {
        for (let i = 0; i < age / 4; i++) {
          console.log("Name:", name);
        }
    } else if (classRole === "Teacher") {
        for (let i = 0; i < age / 4; i++) {
          console.log("Name:", name);
        }
    } else { // Default logic for invalid class role
        console.log("Invalid class role." );
    }
} else if (course === "BSM") {
    // The same as the  logic of BSCS
} else if (course === "BAEL") {
    // The same as the logic of BSCS
} else {
    // Default the logic to invalid course
    console.log("Invalid course.");
}
