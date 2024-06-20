const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('API server', () => {
  it('should respond with status code 200 (OK) for GET /', (done) => {
    chai.request('http://localhost:7865')
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should respond with "Welcome to the payment system" for GET /', (done) => {
    chai.request('http://localhost:7865')
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});
