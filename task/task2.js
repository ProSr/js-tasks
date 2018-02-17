//Task 2. Check for spam

let checkSpam = str => str.toLowerCase().includes('xxx') || str.toUpperCase().includes('VIAGRA');

/*
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/
//done 