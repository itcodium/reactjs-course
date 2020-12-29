
describe('Test Employees Api', function () {
  describe('dummy.restapiexample.com', function () {
    it('/api/v1/employee/59286', function (done) {
      chai.request('http://dummy.restapiexample.com')
        .get('/api/v1/employee/59286')
        .query({
        })
        .end(function (err, res) {
          chai.expect(res.status).to.equal(200);
          chai.expect(res.text).to.be.an('string');
          done();
        });
    });

    it('/api/v1/employees', function (done) {
        chai.request('http://dummy.restapiexample.com')
          .get('/api/v1/employees')
          .query({
          })
          .end(function (err, res) {
            chai.expect(res.status).to.equal(200);
            chai.expect(res.text).to.be.an('string');
            done();
          });

    });
  });
});


describe('#sum()', function () {

  context('without arguments', function () {
    it('should return 0', function () {
      expect(sum()).to.equal();
    });
  });

  context('with number arguments', function () {
    it('should return sum of arguments', function () {
      expect(sum(1, 2, 3, 4, 5)).to.equal(15);
    });
    it('should return argument when only one argument is passed', function () {
      expect(sum(5)).to.equal(5);
    });
  });

  context('with non-number arguments', function () {

    it('should throw error', function () {
      expect(function () {
        sum(1, 2, '3', [4], 5);
      }).to.throw(TypeError, 'sum() expects only numbers.');
    });

  });
});
