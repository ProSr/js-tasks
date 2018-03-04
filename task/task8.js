//Task 8. Format the relative date
function formatDate (date) {
  
  let a = new Date - date,
      DD = date.getDate(),
      MM = date.getMonth() + 1,
      YY = String(date.getFullYear()).substring(2);
                 
  if(a < 1e3) return `right now`;
  if(a < 6e4) return `${a / 1e3} sec. ago`;
  if(a < 3.6e+6) return `${a / 6e4} min. ago`;
  return `${DD < 10 ? '0' + DD : DD}.${MM < 10 ? '0' + MM : MM}.${YY} ${date.toTimeString().substring(0, 5)}`
}
//done +
