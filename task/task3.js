//Task 3. Repeat until the input is a number

function readNumber() {
  
  while(1) {
      let number = prompt("Enter a number please?", '0'); 

     if(isFinite(number)) { 
        switch(number) {
          case '':
          case null: return null;
          default: return Number(number)
        }  
      } else continue;
  }
}
//alert(readNumber());
//done +++