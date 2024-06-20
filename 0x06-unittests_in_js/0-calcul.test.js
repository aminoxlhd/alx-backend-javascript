const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('calculateNumber function', () => {

    it('should add two rounded integers', () => {
        const result = calculateNumber(2.14, 2.74);
        assert.equal(result, 5); 
    });

    it('should add two negative integers', () => {
        const result = calculateNumber(-2.14, -2.74);
        assert.equal(result, -5); 
    });

    it('should handle large numbers', () => {
        const result = calculateNumber(12345.678, 98765.432);
        assert.equal(result, 111111);
    });

    it('should handle large negative numbers', () => {
        const result = calculateNumber(-12345.678, -98765.432);
        assert.equal(result, -111111); 
    });


    it('should add two one float and one integer', () => {
        const result = calculateNumber(2.14, 2);
        assert.equal(result, 4); 
    });
});
