//Task 5. Filter through function
    
    function inBetween(a, b) {
      return function(...c) {
        return a <= c && c <= b;
      }
    }
    
    function inArray(arr) {
      let d = b => arr.filter(item => b.includes(item)).toString();
      
      return function(...b) {
        
        if(b.length === 1) {
          if(Array.isArray(b[0])) return d(b[0]);
          return arr.includes(b[0]);
        }
        return d(b);
        
      }
    }

//done
