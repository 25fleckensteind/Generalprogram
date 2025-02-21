// Practice for Loops and Arrays

// Task #1
// for (let i = 0; i < 22; i++) {
//      if (i % 2 == 0){
//          continue;
//      }
//      console.log(i);
//  }

// *****************************
// Task #2
// let i = 0
// while (i < 3) { 
//      console.log(i);
//      i++;
// }

//******************************
//Task #3
 for (let i = 1; i <= 100; i++){
     sum += i;

     if (Date.now() > now + 100){
         console.log("Nuh huh");
         break;
     }
 }

console.log(sum);
