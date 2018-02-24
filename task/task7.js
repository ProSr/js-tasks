//Task 7. Map to objects

let usersMapped = users => users.map(item => {
  item.fullName = `${item.name} ${item.surname}`;
  delete item.name;
  delete item.surname;
  return item;
})

//done 