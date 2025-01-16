// code your solution here
function superbowlWin(record) {
    // Use the find() method to locate the first object where result is "W"
    const winRecord = record.find(game => game.result === "W");
    
    // If a win record is found, return the year; otherwise, return undefined
    return winRecord ? winRecord.year : undefined;
  }
  
  // Example usage:
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
  ];
  
  console.log(superbowlWin(record)); // Output: "2015"
  
