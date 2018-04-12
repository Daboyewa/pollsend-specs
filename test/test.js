var chai = require('chai'),
    should = chai.should,
    expect = chai.expect,
    Promise = require('bluebird'),
    request = require('superagent-promise')(require('superagent'), Promise),
    chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);
var expect = require('chai').expect;
var request = require('request');
var url = process.env.URL || 'http://localhost:8000/polls';
"use strict";
describe('Math', function() {  
    describe('#abs()', function() {
        it('should return positive value of given negative number', function() {
            expect(Math.abs(-5)).to.be.equal(5);
        });

        it('should return positive value of given positive number', function() {
            expect(Math.abs(3)).to.be.equal(3);
        });

        it('should return 0 given 0', function() {
            expect(Math.abs(0)).to.be.equal(0);
        });
    });

    describe('#sqrt()', function() {
        it('should return the square root of a given positive number', function() {
            expect(Math.sqrt(25)).to.be.equal(5);
        });

        it('should return NaN for a given negative number', function() {
            expect(Math.sqrt(-9)).to.be.NaN;
        });

        it('should return 0 given 0', function() {
            expect(Math.sqrt(0)).to.be.equal(0);
        });
    });
});
