function filterStrings(arr, char, callback) {
    const filteredStrings = arr.filter(str => str.includes(char));
    callback(filteredStrings);
  }
  
  const arr4 = ['hello', 'world', 'javascript', 'callback'];
  const char = 'a';
  
  function callbackFunction(filteredStrings) {
    console.log("Filtered strings:", filteredStrings);
  }
  
  filterStrings(arr4, char, callbackFunction);
  