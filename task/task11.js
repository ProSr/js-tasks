//Task 11. Filter unique array members

let unique = arr => arr.filter((item, index) => {

    while(++index <= arr.length) {
      if(arr[index] === item) return false;
    }
    return true;
  });

//done 