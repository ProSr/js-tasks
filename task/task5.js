// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
 let multiplyNumeric = function(obj) {
      
      for(let key in obj) {
        if(typeof(obj[key]) === "number") {
          obj[key] *= 2;
          alert(obj[key]);
        };
      };
};
multiplyNumeric(menu);