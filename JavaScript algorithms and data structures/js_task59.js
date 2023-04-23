// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);
  
  /* Type Coercion
  1   ==  1  true
  1   ==  2   false
  1   == '1' true
  "3" ==  3   true */