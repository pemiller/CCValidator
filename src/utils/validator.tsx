/**
 * LuhnCheck is an algorithm to validate a credit card number (which includes a check digit at the end)
 * 
 * @param value the credit card number to test
 * @returns true if credit card number is valid
 */
function LuhnCheck(value: string): boolean {
    // valid bank card numbers are between 12 - 19 in length
    if (value.length < 12 || value.length > 19) {
        return false;
    }

    // only accept numbers in the input value
    if (/[^0-9]+/.test(value)) {
        return false;
    }

    let sum = 0;
    let parity = value.length % 2;

    // loop over the credit card number backwards
    for (var i = value.length-1; i >= 0; i--) {
        var digit = parseInt(value.charAt(i));
        // if index matches odd/even of length then duplicate digit
        if (i % 2 === parity) { digit *= 2 }
        // if digit is larger than 9 then bring it back into range
        if (digit > 9) { digit -= 9 }
        // add result to sum
        sum += digit
    }
    
    // because the check digit is included in the value calculated 
    // above we expect the total to be 0
    return sum % 10 === 0
}

export default LuhnCheck;