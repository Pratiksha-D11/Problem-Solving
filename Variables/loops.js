// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5
let n = 5;

// Outer loop iterate over each row
for (let i = 1; i <= n; i++) {      
  let line = '';
  
  // Inner loop prints number
  for (let j = 1; j <= i; j++) {   
    line += j + ' ';
  }
  
  // Print ith row 
  console.log(line);
}

// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1

let n = 5;

// Outer loop iterate over each row
for (let i = n; i >= 1; i--) {    
  let line = '';
  
  // Inner loop prints number
  for (let j = 1; j <= i; j++) { 
    line += j + ' ';
  }
  
  // Print ith row 
  console.log(line);
}