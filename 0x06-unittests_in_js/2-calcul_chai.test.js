const { expect } = require('chai');

const calculateNumber = require('./2-calcul_chai');  

describe('calculateNumber function', () => {
  describe('Addition', () => {
    it('should add two rounded integers', () => {
      const result = calculateNumber('SUM', 2.12, 2.74);
      expect(result).to.equal(5);
    });

    it('should handle negative numbers', () => {
      const result = calculateNumber('SUM', -1.5, 4.2);
      expect(result).to.equal(3);
    });
  });

  describe('Subtraction', () => {
    it('should subtract two rounded integers', () => {
      const result = calculateNumber('SUBTRACT', 5, 2);
      expect(result).to.equal(3);
    });

    it('should handle negative results', () => {
      const result = calculateNumber('SUBTRACT', -2, 5);
      expect(result).to.equal(-7);
    });
  });

  describe('Division', () => {
    it('should divide two rounded integers', () => {
      const result = calculateNumber('DIVIDE', 10, 2);
      expect(result).to.equal(5);
    });

    it('should handle division by zero', () => {
      const result = calculateNumber('DIVIDE', 10, 0);
      expect(result).to.equal('Error');
    });
  });

  it('should throw error for invalid type', () => {
    expect(() => calculateNumber('INVALID', 10, 2)).to.throw(Error);
  });

});
