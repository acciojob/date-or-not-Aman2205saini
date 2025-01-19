var isDate = function (input) {
  //   write your code here
	 // If the input is a Date object, check if it is valid
    if (input instanceof Date) {
        return !isNaN(input.getTime()); // A valid date will have a valid timestamp
    }

    // If the input is a string, try to parse it into a Date
    if (typeof input === 'string') {
        const parsedDate = new Date(input);
        return !isNaN(parsedDate.getTime()); // Check if the parsed date is valid
    }

    // If the input is neither a Date object nor a valid string, return false
    return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
