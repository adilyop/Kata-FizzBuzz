function fizzBuzz(input) {
    let result = '';
    if (isNaN(input) || input === '') {
        return 'Error';
    }
    if (input < 1 || input > 100) {
        return 'Error';
    }
    if (input % 3 === 0) {
        result += 'Fizz';
    }
    if (input % 5 === 0) {
        result += 'Buzz';
    }
    if (result === '') {
        result = input;
    }
    return result;
}

module.exports = fizzBuzz;