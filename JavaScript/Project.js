//Get Variables
fname = prompt("What is your first name?");
lname = prompt("What is your last name?");
age = prompt("How old are you?");
height = prompt("What is your height in cm?");
pname = prompt("What is your pet's name?");

if (fname[0] === lname[0]) {
  if (age > 20 && age < 30) {
    if (height >= 170) {
      if (pname.slice(-1) === 'y') {
        console.log("Here is your mission!");
      }
    }
  }
}
