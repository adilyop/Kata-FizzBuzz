
var config = require('../config/config');

function fizzBuzzV0(input) {
    let result = '';
    if (isNaN(input) || input === '' || input === 0)
        result = 'Error: Invalid Args';
    else {
        if (input % 3 === 0)
            result = result + 'Fizz';
        if (input % 5 === 0)
            result = result + 'Buzz';
        if (result === '')
            result = input;
    }
    return result
}
function fizzBuzz(input) {
    let result = '';
    if (isNaN(input) || input === '' || input === 0)
        result = 'Error: Invalid Args';
    else {
        for (let i = 0; i < Object.keys(config).length; i += 1) {
            if (input % Object.keys(config)[i] === 0)
                result = result + config[Object.keys(config)[i]];
        }
        if (result === '')
            result = input;
    }
    return result
}


module.exports = fizzBuzz;