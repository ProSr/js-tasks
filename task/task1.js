'use strict';
/*Task1*/

//ESLint

/*

function pow(x,n)
{
    let result=1;
    for(let i=0;i<n;i++) {result*=x;}
    return result;
}

let x=prompt('x?',''), n=prompt('n?','');
if (n<=0)
{
    alert(`Power ${n} is not supported, please enter an integer 
    number greater than zero`);
}
else
{
    alert(pow(x,n));
}

*/

//JSLint;
function pow(x, n) {
  let result = 1, i;
  for (i = 0; i < n; i++) {result *= x; }
  return result;
}

let x /*= prompt("x?", '')*/, n /*= prompt("n?", '')*/;
if (n <= 0) {
  alert(`Power ${n} is not supported, please enter an 
  integer number greater than zero`);
}
else
{
  alert(pow(x,n))
}
// В заключении, JSLint удобен, встроен в редактор, но пока ещё не настроен как следует.
//ESLint нужно инсталировать каждый раз в проект, он не обращает внимания на детали, а только на грубые ошибки.
//Done +++
