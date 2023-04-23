function testLessThan(val) {
    if (val < 25) {  // Like the equality operator, the less than operator converts data types while comparing.
      return "Under 25";
    }
  
    if (val < 55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);

