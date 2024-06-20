const chai = require('chai');
const expect = chai.expect;

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('Testing getPaymentTokenFromAPI function', () => {
  it('Should resolve with successful response when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
