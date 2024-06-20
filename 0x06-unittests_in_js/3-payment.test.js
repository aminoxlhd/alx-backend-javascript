const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');

const sendPaymentRequestToApi = require('./3-payment'); 
const Utils = require('./utils'); 

describe('Testing sendPaymentRequestToApi function', () => {
  it('Should calculate the total using Utils.calculateNumber', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledWith(`The total is: ${120}`)).to.be.true;
    sinon.restore();
  });
});
