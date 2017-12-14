
const chai = require('chai');
const expect = chai.expect;
const fizzBuzz = require('../app/fizzBuzz');

describe('FizzBuzz Kata Test: \n', () => {
    it('should return Error', (done) => {
        expect(fizzBuzz('')).to.equal('Error: Invalid Args');
        expect(fizzBuzz('test')).to.equal('Error: Invalid Args');
        expect(fizzBuzz(0)).to.equal('Error: Invalid Args');
        done();
    });
    it('should return number', (done) => {
        expect(fizzBuzz(1)).to.equal(1);
        expect(fizzBuzz(16)).to.equal(16);
        expect(fizzBuzz(98)).to.equal(98);
        done();
    });
    it('should return Fizz', (done) => {
        expect(fizzBuzz(3)).to.equal('Fizz');
        expect(fizzBuzz(36)).to.equal('Fizz');
        expect(fizzBuzz(63)).to.equal('Fizz');
        done();
    });
    it('should return Buzz', (done) => {
        expect(fizzBuzz(5)).to.equal('Buzz');
        expect(fizzBuzz(10)).to.equal('Buzz');
        expect(fizzBuzz(80)).to.equal('Buzz');
        done();
    });
    it('should return FizzBuzz', (done) => {
        expect(fizzBuzz(15)).to.equal('FizzBuzz');
        expect(fizzBuzz(30)).to.equal('FizzBuzz');
        expect(fizzBuzz(45)).to.equal('FizzBuzz');
        done();
    });
});