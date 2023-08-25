function filterAndCallCallback(arr, keyword, callback) {
  const filteredArray = arr.filter(item => item.includes(keyword));
  callback(filteredArray);
}

const arr = ['Hello World', 'Goodbye', 'JavaScript', 'World of Warcraft'];

function callbackFunction(filteredArray) {
  console.log("Filtered array:", filteredArray);
}

filterAndCallCallback(arr, 'World', callbackFunction);
