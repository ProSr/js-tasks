//Task 3. Truncate the text

let truncate = (str, maxlength) => str.length > maxlength ? str.slice(0, (maxlength - 1)) + '…' : str;

//done +++