function filterNumbers(arr, callback) {
    const evenNumbers = arr.filter(number => number % 2 === 0);
    callback(evenNumbers);
  }
  
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  function callbackFunction(filteredNumbers) {
    console.log("Even numbers:", filteredNumbers);
  }
  
  filterNumbers(arr, callbackFunction);
  