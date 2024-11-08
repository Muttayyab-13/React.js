// Project 1:

function checkpalindrome(str) {
    str = str.toLowerCase();
   const cleaned = str.replace(/[^a-z0-9]/g, '');


   const reversed = cleaned.split('').reverse().join('');
   return cleaned === reversed;
}

let ans=checkpalindrome("yey");

if(ans)
{
 console.log("It is Palindrome")
}
else
{
 console.log("Not Palindrome")
}


// Project 2

function rot13(encoded) {
    let decoded = ''; // Initialize an empty string to store the decoded result
  
      for (let i = 0; i < encoded.length; i++) {
          let char = encoded[i]; // Get the current character
  
          // Check if the character is an uppercase letter
          if (char >= 'A' && char <= 'Z') {
              // Calculate the decoded character's ASCII code
              let decodedCharCode = char.charCodeAt(0) - 13;
  
              // If the code is less than 'A', wrap around
              if (decodedCharCode < 'A'.charCodeAt(0)) {
                  decodedCharCode += 26; // Wrap around by adding 26
              }
  
              // Convert the ASCII code back to a character
              decoded += String.fromCharCode(decodedCharCode);
          } else {
              // If not an uppercase letter, just append the character as is
              decoded += char;
          }
      }
  
      return decoded; // Return the decoded string
  
  }
  
  console.log(rot13("SERR PBQR PNZC"));

// Project 3

function convertToRoman(num) {
    //  Define the Roman numeral symbols and their corresponding values.
    
    const romanNumerals = [
        { symbol: 'M', value: 1000 },
        { symbol: 'CM', value: 900 },
        { symbol: 'D', value: 500 },
        { symbol: 'CD', value: 400 },
        { symbol: 'C', value: 100 },
        { symbol: 'XC', value: 90 },
        { symbol: 'L', value: 50 },
        { symbol: 'XL', value: 40 },
        { symbol: 'X', value: 10 },
        { symbol: 'IX', value: 9 },
        { symbol: 'V', value: 5 },
        { symbol: 'IV', value: 4 },
        { symbol: 'I', value: 1 }
    ];

  
    let result = '';

    // Step 3: Iterate over each symbol-value pair in the list.
    for (const { symbol, value } of romanNumerals) {  // for... of Loop
    
        while (num >= value) {
            result += symbol; // Add the Roman numeral symbol to the result.
            num -= value;     // Reduce the number by the symbol's value.
        }
    }


    return result;
}

console.log(convertToRoman(36)); // Outputs: XXXVI


// Project 4

function isValidUSPhoneNumber(str) {

    // Regular expression to validate US phone number formats
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}[\s\-]?\d{4}$/;

    
    return phoneRegex.test(str);
}

// Example usage:
console.log(isValidUSPhoneNumber("555-555-5555")); // true
console.log(isValidUSPhoneNumber("(555)555-5555")); // true
console.log(isValidUSPhoneNumber("1 555 555 5555")); // true
console.log(isValidUSPhoneNumber("8oo-six427676;laskdjf")); // false





