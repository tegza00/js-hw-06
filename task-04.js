function getLongestName(names, callback) {
    let longestName = '';
    
    for (const name of names) {
      if (name.length > longestName.length) {
        longestName = name;
      }
    }
    
    callback(longestName);
  }
  
  const names = ['Андрій', 'Олександр', 'Максим', 'Юлія', 'Наталія'];
  
  function callbackFunction(longestName) {
    console.log("Longest name:", longestName);
  }
  
  getLongestName(names, callbackFunction);
  