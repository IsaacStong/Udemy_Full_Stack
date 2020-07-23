/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!


///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop

// While Loop
var u = 0;
while(u < 5){
  console.log("hello");
  u += 1;
}


// For Loop
for(i=0; i<5; i++){
  console.log("hello");
}



/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop
var j = 1;
while (j <= 25) {
  if (j%2==1) {
    console.log(j);
  }
  j += 1;
}

// METHOD TWO
// For Loop
for (var f = 0; f <= 25; f++) {
  if (f%2==1) {
    console.log(f);
  }
}
