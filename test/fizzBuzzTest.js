
const chai = require('chai');
const expect = chai.expect;
const fizzBuzz = require('../app/fizzBuzz');

describe('FizzBuzz Kata Test: \n', () => {
    it('should return input when input is not multiple of 3 and 5', (done) => {
        expect(fizzBuzz(1)).to.equal(1);
        expect(fizzBuzz(2)).to.equal(2);
        expect(fizzBuzz(4)).to.equal(4);
        done();
    });
    it('should return Fizz when input is multiple of 3', (done) => {
        expect(fizzBuzz(3)).to.equal('Fizz');
        expect(fizzBuzz(6)).to.equal('Fizz');
        expect(fizzBuzz(9)).to.equal('Fizz');
        done();
    });
    it('should return Buzz when input is 5', (done) => {
        expect(fizzBuzz(5)).to.equal('Buzz');
        expect(fizzBuzz(10)).to.equal('Buzz');
        expect(fizzBuzz(20)).to.equal('Buzz');
        done();
    });
    it('should return FizzBuzz when input is multiple of 3 and 5', (done) => {
        expect(fizzBuzz(15)).to.equal('FizzBuzz');
        expect(fizzBuzz(30)).to.equal('FizzBuzz');
        expect(fizzBuzz(45)).to.equal('FizzBuzz');
        done();
    });
    it('should return error when input is not a Number', (done) => {
        expect(fizzBuzz('')).to.equal('Error');
        expect(fizzBuzz('string')).to.equal('Error');
        done();
    });
    it('should return error when number is greater than 100 or less than 1', (done) => {
        expect(fizzBuzz(0)).to.equal('Error');
        expect(fizzBuzz(101)).to.equal('Error');
        done();
    });
});