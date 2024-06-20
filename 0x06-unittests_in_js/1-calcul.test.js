const assert = require('assert');

const calculateNumber = require('./1-calcul');

describe('calculateNumber function', () => {
  describe('Addition', () => {
    it('should add two rounded integers', () => {
      const result = calculateNumber('SUM', 2.12, 2.74);
      assert.equal(result, 5);
    });

    it('should handle negative numbers', () => {
      const result = calculateNumber('SUM', -1.5, 4.2);
      assert.equal(result, 3);
    });
  });

  describe('Subtraction', () => {
    it('should subtract two rounded integers', () => {
      const result = calculateNumber('SUBTRACT', 5, 2);
      assert.equal(result, 3);
    });

    it('should handle negative results', () => {
      const result = calculateNumber('SUBTRACT', -2, 5);
      assert.equal(result, -7);
    });
  });

  describe('Division', () => {
    it('should divide two rounded integers', () => {
      const result = calculateNumber('DIVIDE', 10, 2);
      assert.equal(result, 5);
    });

    it('should handle division by zero', () => {
      const result = calculateNumber('DIVIDE', 10, 0);
      assert.equal(result, 'Error');
    });
  });

  it('should throw error for invalid type', () => {
    assert.throws(() => calculateNumber('INVALID', 10, 2), Error);
  });

});
