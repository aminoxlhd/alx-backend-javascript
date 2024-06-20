const chai = require('chai');
const expect = chai.expect; 
const sinon = require('sinon'); 

const sendPaymentRequestToApi = require('./5-payment'); 

describe('sendPaymentRequestToApi function', () => {
  beforeEach(() => {
    sinon.spy(console, 'log');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should calculate and log the total (100 + 20)', () => {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
  });

  it('should calculate and log the total (10 + 10)', () => {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true;
  });
});
